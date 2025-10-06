#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

function findAndGenerateManifests() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) return;

  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.name === 'images') {
          // Generate manifest for image directory
          const images = fs.readdirSync(fullPath)
            .filter(file => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
          
          if (images.length > 0) {
            fs.writeFileSync(
              path.join(fullPath, 'manifest.json'),
              JSON.stringify({ images }, null, 2)
            );
          }
        } else {
          scanDirectory(fullPath);
        }
      }
    }
  }

  scanDirectory(publicDir);
}

if (require.main === module) {
  findAndGenerateManifests();
}

module.exports = { findAndGenerateManifests };
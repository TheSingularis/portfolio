#!/usr/bin/env node

/**
 * Helper script to generate image mappings for projects
 * Usage: node scripts/generateImageMappings.js [project-directory]
 */

const fs = require("fs");
const path = require("path");

function getImageFiles(directory) {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];

  try {
    const files = fs.readdirSync(directory);
    return files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .sort();
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error.message);
    return [];
  }
}

function updateImageLoader(imagePath, imageFiles) {
  const imageLoaderPath = path.join(
    __dirname,
    "..",
    "src",
    "utils",
    "imageLoader.js"
  );

  try {
    let content = fs.readFileSync(imageLoaderPath, "utf8");

    // Create the new mapping entry
    const mappingName =
      imagePath.replace(/[^\w]/g, "_").toUpperCase() + "_IMAGES";
    const imageArray = `[\n  ${imageFiles
      .map((f) => `'${f}'`)
      .join(",\n  ")}\n]`;

    // Add the constant at the top
    const constantDef = `\n// ${imagePath}\nconst ${mappingName} = ${imageArray};\n`;

    // Find where to insert the constant (after existing constants)
    const insertPos = content.indexOf("\n/**");
    if (insertPos !== -1) {
      content =
        content.slice(0, insertPos) + constantDef + content.slice(insertPos);
    }

    // Add to PROJECT_IMAGE_MAPPINGS
    const mappingsMatch = content.match(
      /(const PROJECT_IMAGE_MAPPINGS = \{[^}]*)/
    );
    if (mappingsMatch) {
      const newMapping = `  '${imagePath}': ${mappingName},`;
      content = content.replace(
        mappingsMatch[1],
        mappingsMatch[1] + "\n" + newMapping
      );
    }

    fs.writeFileSync(imageLoaderPath, content);
    console.log(
      `✅ Updated imageLoader.js with ${imageFiles.length} images for ${imagePath}`
    );
  } catch (error) {
    console.error("Error updating imageLoader.js:", error.message);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(
      "Usage: node scripts/generateImageMappings.js <project-directory>"
    );
    console.log(
      "Example: node scripts/generateImageMappings.js public/projects/my-project/images"
    );
    return;
  }

  const projectDir = args[0];
  const fullPath = path.resolve(projectDir);

  if (!fs.existsSync(fullPath)) {
    console.error(`Directory does not exist: ${fullPath}`);
    return;
  }

  const imageFiles = getImageFiles(fullPath);

  if (imageFiles.length === 0) {
    console.log(`No image files found in ${projectDir}`);
    return;
  }

  console.log(`Found ${imageFiles.length} images in ${projectDir}:`);
  imageFiles.forEach((file) => console.log(`  - ${file}`));

  // Convert to web path
  const webPath =
    "/" + projectDir.replace(/\\/g, "/").replace(/^public\//, "portfolio/");

  console.log(`\nWeb path: ${webPath}`);
  console.log("\nAdd this to your portfolio.json:");
  console.log(`"images": "${webPath}"`);

  updateImageLoader(webPath, imageFiles);
}

if (require.main === module) {
  main();
}

/**
 * Utility functions for loading images from directories
 */

// Known image files for World of Zombies project
const WORLD_OF_ZOMBIES_IMAGES = [
  "Screenshot_2025-10-05_222331.png",
  "Screenshot_2025-10-05_222426.png",
  "Screenshot_2025-10-05_222756.png",
  "Screenshot_2025-10-05_222905.png",
  "Screenshot_2025-10-05_223135.png",
  "Screenshot_2025-10-05_223523.png",
  "Screenshot_2025-10-05_223557.png",
];

/**
 * Project-specific image mappings
 * For each project, list the images that exist in its directory
 */
const PROJECT_IMAGE_MAPPINGS = {
  "/portfolio/projects/world-of-zombies/images": WORLD_OF_ZOMBIES_IMAGES,
};

/**
 * Loads all images from a directory based on predefined mappings
 * @param {string} imagePath - Path to the images directory
 * @returns {Promise<string[]>} - Array of full image URLs
 */
export const loadImagesFromDirectory = async (imagePath) => {
  const imageFiles = PROJECT_IMAGE_MAPPINGS[imagePath];

  if (!imageFiles) {
    console.warn(`No image mapping found for path: ${imagePath}`);
    return [];
  }

  // Verify images exist and return full paths
  const fullPaths = imageFiles.map((filename) => `${imagePath}/${filename}`);

  // Optionally verify images exist (can be disabled for performance)
  const verifyImages = true;

  if (verifyImages) {
    const testPromises = fullPaths.map(async (fullPath) => {
      try {
        const response = await fetch(fullPath, { method: "HEAD" });
        return response.ok ? fullPath : null;
      } catch (error) {
        return null;
      }
    });

    const results = await Promise.all(testPromises);
    return results.filter((img) => img !== null);
  }

  return fullPaths;
};

/**
 * Add a new project's images to the mapping
 * @param {string} imagePath - Path to the images directory
 * @param {string[]} imageFiles - Array of image filenames
 */
export const addProjectImages = (imagePath, imageFiles) => {
  PROJECT_IMAGE_MAPPINGS[imagePath] = imageFiles;
};

/**
 * A more specific function for projects that use the images directory pattern
 * This will be more reliable for your specific use case
 */
export const loadProjectImages = async (project) => {
  if (!project.images) {
    // Fallback to single image if available
    return project.image ? [project.image] : [];
  }

  try {
    const images = await loadImagesFromDirectory(project.images);
    return images;
  } catch (error) {
    console.error("Error loading project images:", error);
    // Fallback to single image if directory loading fails
    return project.image ? [project.image] : [];
  }
};

/**
 * Get the first image from a project for use as a thumbnail
 */
export const getProjectThumbnail = async (project) => {
  const images = await loadProjectImages(project);
  return images.length > 0 ? images[0] : null;
};

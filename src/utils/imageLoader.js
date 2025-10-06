/**
 * Utility functions for loading images from directories using build-time generated manifests
 */

/**
 * Cache for discovered images to avoid repeated API calls
 */
const imageCache = new Map();

/**
 * Dynamically discovers and loads all images from a directory
 * @param {string} imagePath - Path to the images directory (e.g., "/portfolio/projects/project-name/images")
 * @returns {Promise<string[]>} - Array of full image URLs
 */
export const loadImagesFromDirectory = async (imagePath) => {
  // Check cache first
  if (imageCache.has(imagePath)) {
    return imageCache.get(imagePath);
  }

  try {
    // Try to fetch the directory listing (this works if the server supports directory listing)
    // For most static hosts, we'll need to use a different approach
    const discoveredImages = await discoverImagesInDirectory(imagePath);

    // Cache the results
    imageCache.set(imagePath, discoveredImages);
    return discoveredImages;
  } catch (error) {
    console.warn(`Could not load images from ${imagePath}:`, error.message);
    return [];
  }
};

/**
 * Loads images from a directory using manifest.json (generated at build time)
 * @param {string} imagePath - Path to the images directory
 * @returns {Promise<string[]>} - Array of discovered image URLs
 */
const discoverImagesInDirectory = async (imagePath) => {
  try {
    const manifestResponse = await fetch(`${imagePath}/manifest.json`);
    if (manifestResponse.ok) {
      const manifest = await manifestResponse.json();
      if (manifest.images && Array.isArray(manifest.images)) {
        return manifest.images.map((img) => `${imagePath}/${img}`);
      }
    }
  } catch (error) {
    console.warn(
      `No manifest found for ${imagePath}. Make sure to run the build process to generate manifests.`
    );
  }

  return [];
};

/**
 * Main function for loading project images
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

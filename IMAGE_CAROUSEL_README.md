# Image Carousel System

This portfolio now supports automatic image carousels for projects. Here's how to add images for your projects:

## How It Works

1. **Project Cards**: Display the first image from a project's image directory as a thumbnail
2. **Project Modal**: Shows all images in an interactive carousel with navigation arrows and thumbnails
3. **Automatic Loading**: Images are loaded dynamically based on the `images` property in your project data

## Adding Images for a New Project

### Step 1: Organize Your Images

1. Create a directory structure under `public/projects/`:
   ```
   public/
     projects/
       your-project-name/
         images/
           screenshot1.png
           screenshot2.png
           screenshot3.png
   ```

2. Put all your project images in the `images` folder

### Step 2: Update Your Project Data

In `src/data/portfolio.json`, add the `images` property to your project:

```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "Your project description...",
  "images": "/portfolio/projects/your-project-name/images",
  // ... other project properties
}
```

### Step 3: Register the Images

You need to tell the system which images exist in your directory. There are two ways:

#### Option A: Use the Helper Script (Recommended)

```bash
node scripts/generateImageMappings.js public/projects/your-project-name/images
```

This will automatically:
- Scan the directory for image files
- Update `src/utils/imageLoader.js` with the image list
- Show you the correct path to use in your portfolio.json

#### Option B: Manual Registration

Edit `src/utils/imageLoader.js` and add your images:

1. Add a constant for your images:
```javascript
const YOUR_PROJECT_IMAGES = [
  'screenshot1.png',
  'screenshot2.png',
  'screenshot3.png',
];
```

2. Add the mapping:
```javascript
const PROJECT_IMAGE_MAPPINGS = {
  '/portfolio/projects/world-of-zombies/images': WORLD_OF_ZOMBIES_IMAGES,
  '/portfolio/projects/your-project-name/images': YOUR_PROJECT_IMAGES, // Add this line
};
```

## Features

- **Navigation**: Click arrows or use keyboard navigation
- **Thumbnails**: Click any thumbnail to jump to that image
- **Responsive**: Adapts to different screen sizes
- **Loading States**: Shows loading indicator while images load
- **Fallback**: Falls back to single image if carousel fails

## Image Requirements

- **Formats**: JPG, PNG, GIF, WebP, SVG
- **Size**: Any size (will be optimized for display)
- **Naming**: Any filename (script will auto-detect)

## Example: World of Zombies

The "World of Zombies" project is already set up as an example:

- **Directory**: `public/projects/world-of-zombies/images/`
- **Portfolio Data**: `"images": "/portfolio/projects/world-of-zombies/images"`
- **Image Count**: 7 screenshots

Try clicking on the World of Zombies project card to see the carousel in action!

# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and professional information for game developers and software engineers.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Project Showcase** - Interactive project cards with detailed modal views
- **Image Carousels** - Beautiful image galleries for project screenshots
- **Skills Section** - Display technical skills with optional links
- **Contact Information** - Easy access to social profiles and resume
- **Clean UI** - Modern, minimalist design with smooth animations

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript features

## Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── profile.jpg        # Profile image
│   ├── resume.pdf         # Resume file
│   └── projects/          # Project assets
├── src/
│   ├── components/        # React components
│   │   ├── ImageCarousel.jsx    # Image gallery component
│   │   ├── Modal.jsx           # Base modal component
│   │   ├── ProjectCard.jsx     # Project preview cards
│   │   ├── ProjectModal.jsx    # Detailed project view
│   │   └── ProjectSection.jsx  # Project section wrapper
│   ├── data/
│   │   └── portfolio.json # Site content and configuration
│   ├── utils/
│   │   └── imageLoader.js # Image loading utilities
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
└── vite.config.js        # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Configuration

### Personal Information

Edit `src/data/portfolio.json` to customize your portfolio content:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "intro": "Your introduction",
    "email": "your.email@example.com",
    "profileImage": "/portfolio/profile.jpg",
    "resume": "/portfolio/resume.pdf",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  }
}
```

### Adding Projects

Add your projects to the `featuredProjects` or `gameJamProjects` arrays in `portfolio.json`:

```json
{
  "id": "project-id",
  "title": "Project Title",
  "description": "Project description",
  "image": "/portfolio/projects/project-name/thumbnail.jpg",
  "images": [
    "/portfolio/projects/project-name/screenshot1.jpg",
    "/portfolio/projects/project-name/screenshot2.jpg"
  ],
  "technologies": ["React", "Node.js", "MongoDB"],
  "github": "https://github.com/yourusername/project",
  "demo": "https://your-demo-url.com"
}
```

### Skills

Update the `skills` array with your technical skills:

```json
"skills": [
  "JavaScript",
  "React",
  {
    "name": "Unity Engine",
    "link": "https://unity.com/"
  }
]
```

## Available Scripts

- `npm run dev` - Generate image manifests and start development server with hot reload
- `npm run build` - Generate image manifests and build the project for production  
- `npm run preview` - Preview the production build locally

**Note**: Image manifests are automatically generated before each build/dev run, ensuring all project images are properly indexed for the carousel system.

## Deployment

The project is configured for deployment with a base path of `/portfolio/`. To deploy:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory
3. Deploy the `dist/` folder to your web server
4. Ensure your server is configured to serve the files with the correct base path

### GitHub Pages

If deploying to GitHub Pages:
1. The `vite.config.js` is already configured with `base: "/portfolio/"`
2. Build and deploy the `dist/` folder to your `gh-pages` branch

## Customization

### Styling

- Global styles are in `src/index.css`
- Component-specific styles are included in the respective component files
- The design uses CSS custom properties for easy theming

### Images

- Place project images in `public/projects/[project-name]/images/`
- Manifest files are automatically generated during build/dev for instant image loading
- No need to manually list image files - just specify the directory path in `portfolio.json`
- All common image formats are supported (jpg, png, gif, webp, svg)
- Images are cached for optimal performance

### Components

The modular component structure makes it easy to:
- Customize the project card layout (`ProjectCard.jsx`)
- Modify the modal behavior (`ProjectModal.jsx`)
- Add new sections (`ProjectSection.jsx`)
- Enhance image galleries (`ImageCarousel.jsx`)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

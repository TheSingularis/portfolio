# Portfolio Website

A minimal, clean portfolio website built with React and Vite. Easily customizable through a simple JSON configuration file.

## Features

- Clean, centered layout similar to joebrogers.com
- Responsive design that works on all devices
- Easy configuration through JSON data file
- Sections for:
  - Hero/Intro
  - Featured Projects
  - Game Jam / Side Projects
  - Skills
  - About / Background
  - Contact

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Customization

### Personal Information & Projects

Edit `src/data/portfolio.json` to customize:

- **Personal info**: Name, title, intro, email, about section, location
- **Skills**: Add or remove skills from the array
- **Featured Projects**: Main portfolio pieces with descriptions, tech stack, and links
- **Game Jam Projects**: Side projects and game jam entries

### Styling

The CSS is in `src/index.css` and follows a clean, minimal approach:

- Centered layout with max-width of 800px
- Simple typography using system fonts
- Subtle hover effects and clean project cards
- Responsive design for mobile devices

### Adding New Projects

To add a new project, simply add an object to either `featuredProjects` or `gameJamProjects` in the JSON file:

```json
{
  "id": 4,
  "title": "New Project",
  "description": "Description of what this project does...",
  "technologies": ["React", "Node.js"],
  "link": "https://github.com/username/project",
  "live": "https://project-demo.com"
}
```

For game jam projects, you can also add an `event` field:
```json
{
  "event": "Ludum Dare 52"
}
```

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── ProjectCard.jsx
│   │   └── ProjectSection.jsx
│   ├── data/        # Configuration
│   │   └── portfolio.json
│   ├── App.jsx      # Main app component
│   ├── index.css    # Styles
│   └── main.jsx     # App entry point
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS** - Simple, custom styling (no frameworks)
- **JSON** - Configuration and data storage

## License

MIT

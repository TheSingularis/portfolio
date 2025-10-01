# Jordan's Portfolio

A simple, responsive Jekyll portfolio site for GitHub Pages, using Bootstrap.

## Features
- Responsive, mobile-friendly layout
- Bootstrap-based navbar (Home, Projects, About, Contact)
- Projects as Markdown files in `_projects` collection
- Project cards with image, description, itch.io and optional GitHub links
- Homepage features latest 3 projects
- About page with bio and skills/tools
- Contact page with email and LinkedIn
- Sample project included
- Custom CSS override

## Setup for GitHub Pages
1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Set Source to "GitHub Actions"
4. The site will automatically build and deploy using the included workflow

## Customization
1. Update `_config.yml` with your site title and URL
2. Replace placeholder content (bio, email, LinkedIn) in pages
3. Add your projects in `_projects/` as Markdown files with front matter:
   ```yaml
   ---
   title: My Game Title
   description: Short description
   image: /assets/images/my-game.png
   itch_link: https://itch.io/my-game
   github_link: https://github.com/yourusername/my-game # optional
   date: YYYY-MM-DD
   ---
   ```
4. Replace `assets/images/sample-screenshot.png` with actual project images

## Build Locally (Optional)
If you have Ruby installed:
```sh
bundle install
bundle exec jekyll serve
```

## License
MIT
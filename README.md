# Portfolio Website

A modern, responsive React portfolio website showcasing work experience, education, projects, and contact information.

## Features

- 🏠 **Home Page** - Hero section with introduction and skills
- 💼 **Work Experience** - Timeline view of professional experience
- 🎓 **Education** - Academic background and achievements
- 🚀 **Projects** - Showcase of projects with technologies used
- 📧 **Contact** - Contact form and information

## Tech Stack

- React 18
- React Router DOM
- Vite
- CSS3 (Modern styling with gradients and animations)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

- **Home Page**: Edit `src/pages/Home.jsx` to update your name, title, and description
- **Work Experience**: Edit the `experiences` array in `src/pages/WorkExperience.jsx`
- **Education**: Edit the `education` array in `src/pages/Education.jsx`
- **Projects**: Edit the `projects` array in `src/pages/Projects.jsx`
- **Contact**: Update contact information in `src/pages/Contact.jsx`

### Styling

All CSS files are located in their respective component directories. The main color scheme can be customized by modifying CSS variables in `src/index.css`.

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── WorkExperience.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── *.css (for each page)
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT


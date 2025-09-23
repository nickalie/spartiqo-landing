# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Spartiqo landing page built with Preact, TypeScript, Tailwind CSS, and Vite. The landing page features a dark, aggressive design theme with powerful messaging focused on high-performance software development services.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (includes TypeScript compilation)
npm run build

# Preview production build
npm run preview

# Type checking only (no build)
npm run typecheck
```

## Architecture

### Tech Stack
- **Framework**: Preact with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite with prerendering enabled
- **Routing**: preact-iso for SSR/hydration

### Project Structure

The application follows a component-based architecture:

```
src/
├── app.tsx              # Main App component (orchestrates all sections)
├── main.tsx             # Entry point with hydration and prerendering
├── style.css            # Global styles and Tailwind imports
└── components/          # Modular UI components
    ├── Header.tsx       # Fixed navigation with logo
    ├── Hero.tsx         # Main hero section with CTA
    ├── Services.tsx     # Services grid (data-driven)
    ├── Power.tsx        # Performance metrics section
    ├── CTA.tsx          # Call-to-action section
    └── Footer.tsx       # Footer with copyright
```

### Key Architectural Decisions

1. **Component Modularity**: Each section is a separate component for maintainability and reusability
2. **Data-Driven Components**: Services and Power components use arrays for easy content updates
3. **Static Site Generation**: Vite prerendering is enabled for better SEO and performance
4. **Dark Theme**: Consistent black/gray color scheme with orange/red accents
5. **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities

### Design System

- **Primary Colors**: Black (#000), Gray shades, Orange (#f97316), Red (#dc2626)
- **Typography**: Font-black for headings, system fonts
- **Spacing**: Consistent padding/margins using Tailwind scale
- **Logo**: SVG located at `/public/logo.svg`, used in Header, Hero, and Footer

### Build Configuration

- **TypeScript**: Strict mode enabled with Preact JSX transform
- **Vite**: Configured with Preact preset and Tailwind CSS plugin
- **Prerendering**: Enabled for static HTML generation at build time
- **CSS**: Tailwind v4 with custom dark theme styles in style.css

## Important Notes

- The logo file must exist at `/public/logo.svg` for proper display
- All components expect a dark theme context (white text on black backgrounds)
- JSX elements containing `<` symbols need HTML entity encoding (`&lt;`)
- The build process includes TypeScript compilation followed by Vite bundling
- Run "npm run build" on any update
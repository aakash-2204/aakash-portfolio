# Portfolio Website

A modern personal portfolio website built with **React**, **TypeScript**, **Vite**, **Three.js**, **GSAP**, and responsive design.

## Features

- Built with **React + TypeScript + Vite**
- Interactive **3D animated tech stack** and smooth section transitions
- Smooth scrolling and scroll-triggered animations with **GSAP**
- Responsive layout for desktop and mobile
- Contact section with direct **Gmail compose** link and social media links
- Work section with project cards and hover interactions
- Timeline section showcasing journey and experience

## Project Structure

- `src/`
  - `components/` — UI sections like `Navbar`, `Landing`, `Career`, `Work`, `Contact`, `TechStack`
  - `components/styles/` — CSS files for each component
  - `main.tsx` — app entry point
- `public/`
  - `images/` — static assets such as logos and placeholder images
  - `models/` — 3D environment and model assets
- `package.json` — project scripts and dependencies
- `vite.config.ts` — Vite build configuration

## Installation

Install dependencies:

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

Open the URL shown in the terminal to view the site locally.

## Build

Create a production build:

```bash
npm run build
```

The optimized output will be generated in the `dist/` folder.

## Preview Production Build

Use this command to preview the built site locally:

```bash
npm run preview
```

## Deployment

Recommended hosting platforms:

- **Vercel**
- **Netlify**
- **GitHub Pages**

Deployment configuration:

- Build command: `npm run build`
- Output directory: `dist`

## Customization

Update the following files to customize your site:

- `src/components/Navbar.tsx` — email link and navigation behavior
- `src/components/Contact.tsx` — email, phone, and social links
- `src/components/TechStack.tsx` — logo image sources for the tech spheres
- `public/images/` — add or replace image assets
- `src/components/Career.tsx` — timeline entries and journey content

## Notes

- The contact email is configured to open Gmail compose directly.
- The project uses `gsap-trial` and `@react-three/fiber` for 3D visuals.
- Once deployed publicly, the website is accessible to anyone with the URL.

## License

This project is available under the MIT License.

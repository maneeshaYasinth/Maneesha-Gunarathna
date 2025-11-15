React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh  
@vitejs/plugin-react-swc uses SWC for Fast Refresh


Dockerized Vite Portfolio Project
🧾 Overview
This project is a React + Vite portfolio website containerized using Docker.The goal is to ensure a consistent, isolated environment for development and deployment—no need to worry about Node.js versions or dependency mismatches.
With Docker, your app runs in a self-contained environment that behaves the same way on any system.

⚙️ Docker Setup
1. 🐳 Dockerfile
Key details:

Base image: node:20-alpine — lightweight and efficient Node.js image.
Working directory: /app inside the container.
Dependencies: package.json and package-lock.json are copied first to enable build caching.
Copy project files: The rest of the app files are copied to /app.
Use --host 0.0.0.0 in your Vite config for external access.
7. 🧱 Architecture Diagram
| Browser: http://localhost:8080/    |
                v
| Container: portfolio-con      |
# Maneesha Gunarathna — Portfolio (React + Vite)

This repository is a personal portfolio built with React + Vite and styled with TailwindCSS. It uses a single-page, section-based layout (no React Router). The navbar scrolls smoothly to the different sections on the page.

Highlights
- Single-page layout: Home → About → Education → Experience → Contact
- Smooth scrolling via `scrollIntoView` (desktop + mobile menu)
- Docker-ready Vite dev environment (optional)

## Quick start (development)

Open a PowerShell terminal in the project root and run:

```powershell
npm install
npm run dev
```

Vite will start (default port 5173). If that port is occupied Vite will try the next available port. In Docker you can map host port 8080 → container 5173 (see Docker section below).

## Project structure (important files)

- `src/App.jsx` — main entry that renders all sections in order
- `src/main.jsx` — React DOM bootstrap
- `src/components/navbar.jsx` — navbar with smooth scroll and mobile menu
- `src/components/home.jsx`, `about.jsx`, `Education.jsx`, `Experience.jsx`, `contact.jsx` — section components (each uses an `id` that the navbar targets)

Each section uses an `id` attribute to enable in-page navigation. Current IDs: `home`, `about`, `education`, `experience`, `contact`.

## How to add or remove a section

1. Create the component in `src/components`, for example `src/components/Skills.jsx` exporting a default React component.
2. Import and add it to the main page flow in `src/App.jsx` (place it where you want it to appear).
3. Give the root element of the section an `id` (e.g., `<section id="skills">`).
4. Add a matching button in `src/components/navbar.jsx` that triggers `scrollIntoView` for the new `id` (copy existing `nav-btn` button style to keep the navbar look).

Example (navbar button):

```jsx
<button onClick={() => scrollTo('skills')} className="nav-btn">Skills</button>
```

## Optional: add active link highlighting (scrollspy)

If you want the navbar to highlight the active section while scrolling, use an `IntersectionObserver` in `navbar.jsx` or a small hook to observe section intersections and set an `active` state. This is low-risk and I can implement it for you if you want.

## Build for production

```powershell
npm run build
```

The built files are output to `dist/` and can be served by any static hosting (Netlify, Vercel, Nginx, GitHub Pages, etc.). For Docker production, consider a multi-stage build that serves files via Nginx.

## Docker (optional)

This project includes a Dockerfile for development convenience. Example commands:

Build the image:

```powershell
docker build -t portfolio-1 .
```

Run dev container (maps host 8080 → container 5173):

```powershell
docker run --name portfolio-con -p 8080:5173 --rm -v /app/node_modules -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true portfolio-1
```

Note for Windows CMD users: replace `${PWD}` with `%cd%` in the `docker run` command.

## Troubleshooting & tips

- If Vite warns `Browserslist: caniuse-lite is outdated`, update with:

```powershell
npx update-browserslist-db@latest
```

- If port `5173` is already in use, Vite will fall back to another port — check the terminal output for the chosen port.

## What I changed / current status

- Converted/confirmed the site is a single-page layout that renders all sections from `App.jsx` (no router).
- `navbar.jsx` already includes smooth scrolling and preserves your visual styles.

If you'd like, I can:
- Implement scrollspy (active nav link on scroll)
- Remove or archive any unused `pages/` files
- Add small accessibility improvements (landmark roles, aria labels)

## Next steps (suggested)

- Add scrollspy for active link highlighting
- Add Lighthouse/SEO improvements (meta tags, page titles per section if required)
- Add CI workflow to build and deploy the site automatically

---

If you want one of the suggested follow-ups, tell me which and I'll implement it (I can add scrollspy quickly while preserving your navbar styles).

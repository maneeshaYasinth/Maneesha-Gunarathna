# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Dockerized Vite Portfolio Project

## Overview
This project is a **React + Vite portfolio website** containerized using **Docker**. The purpose of using Docker is to create a consistent development environment that works on any machine without worrying about local Node.js versions or dependency conflicts.  

With Docker, you can run your app in an isolated environment and ensure that all dependencies behave the same way on any system.

---

## Docker Setup

### 1. Dockerfile
- **Base image:** `node:20-alpine` — a lightweight Node.js image suitable for development.
- **Working directory:** `/app` inside the container.
- **Dependencies:** `package.json` and `package-lock.json` are copied first to leverage caching during `npm install`.
- **Copy project files:** All local project files are copied into the container.
- **Expose port:** Vite default port `5173` is exposed inside the container.

---

### 2. Build Docker Image
Command:

```bash
docker build -t portfolio-1 .

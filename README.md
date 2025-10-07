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
Expose port: Vite’s default port 5173 is exposed for the app.


2. 🏗️ Build Docker Image
Run the following command in your project root directory:
docker build -t portfolio-1 .

3. 🚀 Run Docker Container
Command:
docker run --name portfolio-con -p 8080:5173 --rm -v /app/node_modules -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true portfolio-1

Explanation of Flags



Flag
Purpose



--name portfolio-con
Names the container portfolio-con.


-p 8080:5173
Maps host port 8080 → container port 5173. Access via http://localhost:8080/.


-v /app/node_modules
Keeps container’s node_modules isolated to avoid conflicts.


-v ${PWD}:/app
Mounts your current project folder into /app inside the container.


-e CHOKIDAR_USEPOLLING=true
Enables Hot Module Reload (HMR) inside Docker.


--rm
Automatically removes the container once stopped.


⚠️ Note for Windows CMD users:Replace ${PWD} with %cd%
-v %cd%:/app

4. 🧠 Vite Output Notes
Once the container runs, you’ll see logs like:
VITE v5.2.13 ready in 2058 ms
  Local:   http://localhost:5173/
  Network: http://172.17.0.2:5173/

These URLs are inside the container, not your host machine.Use this instead:
👉 Access from browser: http://localhost:8080/
5. 🧰 Common Docker Commands
# List all Docker images
docker images

# List all containers
docker ps -a

# Stop and remove a container
docker rm -f <container_id>

# Rebuild Docker image
docker build -t portfolio-1 .

# Run container again
docker run --name portfolio-con -p 8080:5173 --rm -v /app/node_modules -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true portfolio-1

6. 💡 Tips & Notes

Keep node_modules volume isolated to prevent conflicts.
Update Browserslist database to avoid outdated warnings:

npx update-browserslist-db@latest


Use --host 0.0.0.0 in your Vite config for external access.
Hot Module Reload (HMR) works automatically with the volume setup above.

7. 🧱 Architecture Diagram
Host Machine (Windows)
+------------------------------------+
| Browser: http://localhost:8080/    |
+------------------------------------+
                |
                v
Docker Engine
+-------------------------------+
| Container: portfolio-con      |
|                               |
| Node.js + Vite App            |
| - Listens on port 5173        |
| - Serves React app            |
| - HMR enabled via CHOKIDAR    |
+-------------------------------+

Flow:Browser → Docker → Vite Container → React App
Port Mapping:Host 8080 → Container 5173
✅ Result
Your React + Vite portfolio is now running inside a Docker container with:

🔁 Hot Reload enabled
⚙️ Consistent development environment
🌐 Accessible via http://localhost:8080/

8. 🔮 Next Steps / To-Do

🧱 Split project into frontend and backend Docker images (when backend added).
🐳 Use Docker Compose for multi-container setups (frontend + backend + DB).
🚀 Add production optimizations:
Serve static build using Nginx
Use multi-stage builds to reduce image size


🔒 Add environment variable management for secrets.
⚡ Set up CI/CD pipelines to automate Docker builds and deployment.

📁 Project Folder Structure
project-root/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── index.html
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
└── README.md

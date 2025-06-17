Task Manager
A modern, full-stack Task Manager application designed to help you efficiently organize, track, and manage your daily tasks. Built with Next.js, TypeScript, MongoDB, and Tailwind CSS, this project demonstrates best practices in web development, clean UI design, and seamless integration with a NoSQL database.

🚀 Features
Add, edit, and delete tasks: Easily manage your to-do list with intuitive controls.

Mark tasks as complete/incomplete: Stay on top of your progress.

Statistics dashboard: View total, completed, and pending tasks at a glance.

Responsive design: Optimized for desktops, tablets, and mobile devices.

Modern UI: Styled with Tailwind CSS for a clean, professional look.

🛠️ Tech Stack
Technology	Purpose
Next.js	React framework
TypeScript	Type safety
MongoDB	NoSQL database
Mongoose	MongoDB ODM
Tailwind	Styling
📸 MongoDB Collection Screenshot
![MongoDB Screenshot](https://res.cloudinary.com/dufvitqpb/image/upload/v1750171632/Screenshot_2025-06-17_ 🏁 Getting Started

Prerequisites
Node.js (v16+)

npm or yarn

MongoDB instance (local or Atlas)

Installation
Clone the repository

bash
git clone https://github.com/shrinivash03/Task-Manger.git
cd Task-Manger
Install dependencies

bash
npm install
# or
yarn install
Configure environment variables

Create a .env.local file in the root directory and add your MongoDB connection string:

text
MONGODB_URI=your_mongodb_connection_string
Run the development server

bash
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser.

📂 Project Structure
app/ — Next.js app directory

api/tasks/route.ts — API endpoints for task operations

components/ — Reusable UI components

lib/mongodb.ts — MongoDB connection utility

models/Task.ts — Mongoose schema for tasks

page.tsx — Main application page

globals.css — Global styles

📃 API Endpoints
GET /api/tasks — Retrieve all tasks

POST /api/tasks — Create a new task

PATCH /api/tasks/:id — Update a task

DELETE /api/tasks/:id — Delete a task

🙌 Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

📄 License
This project is open source and available under the MIT License.

Developed by Shrinivash

Empower your productivity with a simple, elegant, and powerful task manager.


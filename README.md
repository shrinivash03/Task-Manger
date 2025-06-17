# Task Manager

A simple and efficient Task Manager web application built with Next.js, TypeScript, MongoDB, and Tailwind CSS. This app allows users to create, view, update, and manage their daily tasks with ease.

## Features

- Add new tasks with validation
- View a list of all tasks
- Mark tasks as completed or pending
- Edit and delete tasks
- Task statistics (total, completed, pending, completion rate)
- Responsive and modern UI with Tailwind CSS

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB (with Mongoose ODM)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**
   git clone https://github.com/shrinivash03/Task-Manger.git
   cd Task-manager



2. **Install dependencies:**
npm install
# or
yarn install



3.  ** Configure environment variables:

Create a .env.local file in the root directory and add your MongoDB connection string:
MONGODB_URI=your_mongodb_connection_string



4. Run the development server:
npm run dev
# or
yarn dev

5. Open http://localhost:3000 in your browser.



########  Project Structure#### :


app/
  api/
    tasks/
      route.ts           # API endpoints for tasks
  components/            # React components
  lib/
    mongodb.ts           # MongoDB connection helper
  models/
    Task.ts              # Mongoose Task model
  page.tsx               # Main page
  globals.css            # Global styles




API Endpoints
. GET /api/tasks - Fetch all tasks
. POST /api/tasks - Create a new task
. PATCH /api/tasks/:id - Update a task
. DELETE /api/tasks/:id - Delete a task



## MongoDB Screenshot

Below is a screenshot of the MongoDB collection used in this project:

![MongoDB Screenshot](https://res.cloudinary.com/dufvitqpb/image/upload/v1750171632Screenshot_2025-06-17_201630_apoenp.png)

Developed by Shrinivash


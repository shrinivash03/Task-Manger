Task Manager
A web-based Task Manager application built for the Monk Mantra internship test. It allows users to create, view, and delete tasks with a responsive UI and RESTful API backend, using MongoDB for persistent storage. The app is deployed on Vercel and demonstrates clean project structure, robust error handling, and production-ready considerations.
Features

Create Tasks: Add new tasks with a title and automatic creation date.
View Tasks: Display all tasks stored in a MongoDB database.
Delete Tasks: Remove tasks with a single click.
Responsive Design: Optimized for desktop and mobile devices.
Error Handling: Validates inputs and provides user-friendly error messages.

Live Demo
Access the app at https://your-task-manager.vercel.app.
Screenshot
Below is a screenshot of the MongoDB database showing the tasks collection:
https://res.cloudinary.com/dufvitqpb/image/upload/v1750171632/Screenshot_2025-06-17_201630_apoenp.png

Technologies Used

Frontend: React, Next.js
Styling: Tailwind CSS (via Tailwind CLI for production optimization)
Backend: Next.js API Routes
Database: MongoDB (for persistent task storage)
Deployment: Vercel
Version Control: Git, GitHub

Installation

Clone the repository:git clone https://github.com/shrinivash03/Task-Manger.git
cd Task-Manger


Install dependencies:npm install


Set up MongoDB:
Create a MongoDB Atlas account and set up a cluster.
Add your MongoDB connection string to a .env.local file:MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/task-manager?retryWrites=true&w=majority




Run the development server:npm run dev


Open http://localhost:3000 in your browser.

Usage

Enter a task title in the input field and click "Add Task" to create a task.
View all tasks fetched from MongoDB in the list below.
Click "Delete" next to a task to remove it.
API endpoints:
GET /api/tasks: Fetch all tasks from MongoDB.
POST /api/tasks: Create a new task (body: { "title": "Task title" }).
DELETE /api/tasks/:id: Delete a task by ID.



Project Structure
├── pages/
│   ├── api/
│   │   ├── tasks.js        # API route for GET/POST tasks
│   │   ├── tasks/[id].js   # API route for DELETE tasks
│   ├── index.js            # Frontend UI
├── styles/
│   ├── globals.css         # Tailwind CSS styles
├── lib/
│   ├── mongodb.js          # MongoDB connection logic
├── tailwind.config.js      # Tailwind configuration
├── .env.local              # Environment variables (MongoDB URI)
├── package.json            # Dependencies and scripts

Error Handling

Input Validation: Prevents empty task titles with a UI error message.
API Errors: Returns HTTP status codes (e.g., 400 for invalid input, 404 for missing tasks) with JSON error messages.
Database Errors: Handles MongoDB connection failures and query errors with user-friendly feedback.
Network Errors: Caught and displayed to the user.

Security Considerations

HTTPS: Enforced by Vercel for secure communication.
Input Validation: Prevents invalid or malicious inputs.
MongoDB Security: Uses environment variables for connection strings to avoid hardcoding credentials.For production enhancements:
Sanitization: Implement sanitize-html to prevent XSS attacks.
Authentication: Add JWT-based authentication for user-specific tasks.
Rate Limiting: Use express-rate-limit for API protection.

Future Improvements
With additional time, I would: Implement task editing via a PUT API route and UI form.
Add task categories or priorities.
Write Jest unit tests for API routes and Cypress end-to-end tests for the UI.
Enhance UI with loading states and animations (e.g., Framer Motion).
Optimize MongoDB queries for better performance.

License
This project is licensed under the MIT License. See LICENSE for details.


Contact
Developed by SHRINIVASH.
GitHub: shrinivash03
Email: shrinivash.006@gmail.com

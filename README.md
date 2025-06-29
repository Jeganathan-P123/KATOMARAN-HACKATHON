# KATOMARAN-HACKATHON
🚀 Todoist – Full Stack Task Management App

**TODOIST** is a full-featured task management web application built using the **React.js** frontend and **Node.js + Express.js** backend. It enables users to create, manage, and filter tasks effectively, with support for priorities, statuses, filtering, and user authentication.

---

## 📦 Tech Stack

| Tech        | Description                          |
|-------------|--------------------------------------|
| React       | Frontend UI                          |
| React Router| Client-side routing                  |
| Node.js     | Backend runtime                      |
| Express.js  | REST API server                      |
| MongoDB     | Database for storing tasks/users     |
| Mongoose    | ODM for MongoDB                      |
| JWT         | Authentication with tokens           |
| CSS         | Custom styling (not Tailwind)        |

---

## ✨ Features

### 🔐 Authentication
- Sign Up and Login with email
- Password confirmation
- JWT-based protected routes
- Logout with session clearing

### 🧩 Task Management
- Create New Task (with title, description, priority, status, tags, and due date)
- Autosave draft while typing
- Priority and Status selection
- Tag support and due date input
- Task filtering by status, priority, and date
- View All Tasks, Total Tasks, Completed, In Progress, Overdue
- Beautiful dashboard with quick stats and navigation

### 👤 Profile Settings
- View user info (name, email)
- Update profile details
- Logout functionality at top-right

---

## 📁 Project Structure

```bash
taskflow/
├── client/                     # React frontend
│   ├── src/
│   │   ├── pages/              # Login, Signup, Dashboard, Tasks, Profile, etc.
│   │   ├── components/         # Reusable components
│   │   ├── App.jsx             # Routing
│   │   └── index.css           # Custom CSS
│   └── public/
├── server/                     # Node.js backend
│   ├── routes/                 # API routes (auth.js, tasks.js)
│   ├── controllers/            # Route logic handlers
│   ├── models/                 # Mongoose models (User.js, Task.js)
│   ├── middleware/             # Auth middleware (auth.js)
│   ├── server.js               # Main backend entry point
├── .env                        # Environment variables
├── README.md
└── package.json

🧭 Pages & Routes
Route	Description
/signup	Sign up new users
/ or /login	Login existing users
/dashboard	Dashboard with task stats/cards
/create-task	Create a new task
/profile-settings	Manage profile
/tasks	View all tasks with filters
/tasks/completed	Completed tasks
/tasks/in-progress	In-progress tasks
/tasks/overdue	Overdue tasks

🌟 Future Enhancements
🔔 Task deadline notifications

📅 Calendar view

🌍 Multi-language support

📱 Mobile app version

💬 Real-time task collaboration/chat

🙌 Developed By
Jeganathan P
Biomedical Engineer | Full Stack Developer | UI/UX Designer

📜 License
This project is licensed under the MIT License.

This project is a part of a hackathon run by https://www.katomaran.com

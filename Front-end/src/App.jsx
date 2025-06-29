// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './App.css';
import CompletedTasks from './pages/CompletedTasks';
import InProgressTasks from './pages/InProgressTasks';
import OverdueTasks from './pages/OverdueTasks';
import CreateTask from './pages/CreateTask';
import ProfileSettings from './pages/ProfileSettings';
import TaskManagement from './pages/TaskManagement';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
        📝TODOIST
        </nav>
        <main className="main-section">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks/completed" element={<CompletedTasks />} />
<Route path="/tasks/in-progress" element={<InProgressTasks />} />
<Route path="/tasks/overdue" element={<OverdueTasks />} />
<Route path="/create" element={<CreateTask/>} />
<Route path="/Profile" element={<ProfileSettings/>} />
<Route path="/tasks" element={<TaskManagement />} />

          </Routes>
        </main>
        <footer className="footer">
          &copy; {new Date().getFullYear()} TODOIST. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;

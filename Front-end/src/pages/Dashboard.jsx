// src/pages/Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const username = "JEGANATHAN";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header-top">
        <h1>
          Hello, <span>{username}!</span>
        </h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <p>
      Mark today's accomplishments and reflect on the progress you've made as you move forward.
      </p>

      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions">
          <button className="btn primary" onClick={() => navigate("/create")}>
            + Create Task
          </button>
          <button className="btn link" onClick={() => navigate("/profile")}>
            👤 Profile Settings
          </button>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card" onClick={() => navigate("/tasks")}>
          <div className="icon clipboard">📋</div>
          <div>Task Management</div>
        </div>
        <div className="stat-card" onClick={() => navigate("/tasks/completed")}>
          <div className="icon success">✅</div>
          <div>Completed</div>
        </div>
        <div className="stat-card" onClick={() => navigate("/tasks/in-progress")}>
          <div className="icon info">🕒</div>
          <div>In Progress</div>
        </div>
        <div className="stat-card" onClick={() => navigate("/tasks/overdue")}>
          <div className="icon danger">⚠️</div>
          <div>Overdue</div>
        </div>
      </section>

      <section className="recent-tasks">
        <h2>
          Recent Tasks{" "}
          <span className="view-all" onClick={() => navigate("/tasks")}>
            View all
          </span>
        </h2>
        <div className="no-tasks">
          <div className="no-icon">📋</div>
          <h3>No tasks yet</h3>
          <p>
            Get started by creating your first task and begin your productivity
            journey
          </p>
          <button className="btn primary" onClick={() => navigate("/create")}>
            Create Task
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

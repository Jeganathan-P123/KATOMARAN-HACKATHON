// src/pages/OverdueTasks.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./TaskStatusPage.css";

const OverdueTasks = () => {
  const navigate = useNavigate();

  return (
    <div className="status-page">
      <div className="header">
        <h2>⚠️ Overdue Tasks</h2>
        <button onClick={() => navigate(-1)}>⬅ Back</button>
      </div>
      <p>You’re all caught up. No overdue tasks!</p>
    </div>
  );
};

export default OverdueTasks;

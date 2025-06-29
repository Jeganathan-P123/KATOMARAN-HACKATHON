// src/pages/InProgressTasks.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./TaskStatusPage.css";

const InProgressTasks = () => {
  const navigate = useNavigate();

  return (
    <div className="status-page">
      <div className="header">
        <h2>🕒 In-Progress Tasks</h2>
        <button onClick={() => navigate(-1)}>⬅ Back</button>
      </div>
      <p>Currently, there are no tasks marked as "In Progress".</p>
    </div>
  );
};

export default InProgressTasks;

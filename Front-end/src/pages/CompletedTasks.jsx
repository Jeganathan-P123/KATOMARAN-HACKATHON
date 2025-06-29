// src/pages/CompletedTasks.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./TaskStatusPage.css";

const CompletedTasks = () => {
  const navigate = useNavigate();

  return (
    <div className="status-page">
      <div className="header">
        <h2>✅ Completed Tasks</h2>
        <button onClick={() => navigate(-1)}>⬅ Back</button>
      </div>
      <p>You have no completed tasks yet. Finish a task to see it here.</p>
    </div>
  );
};

export default CompletedTasks;

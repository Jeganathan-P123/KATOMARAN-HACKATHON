import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTask.css';

const CreateTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    status: 'Pending',
    dueDate: '',
    tags: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task); // send to backend later
    alert("Task Created!");
    navigate('/dashboard');
  };

  return (
    <div className="create-task-container">
      <div className="top-bar">
        <button onClick={() => navigate('/dashboard')} className="back-btn">← Back to Tasks</button>
        <span className="auto-save">Draft saved automatically ●</span>
      </div>

      <h1 className="title">➕ Create New Task</h1>
      <p className="subtitle">Transform your ideas into actionable tasks with our intuitive task management system</p>

      <form className="task-form" onSubmit={handleSubmit}>
        <section>
          <h2><span className="step">1</span> Task Information</h2>
          <label>Task Title *</label>
          <input type="text" name="title" maxLength="100" placeholder="What needs to be accomplished?" required onChange={handleChange} />

          <label>Description</label>
          <textarea name="description" placeholder="Context, goals, outcomes..." onChange={handleChange} />
        </section>

        <section>
          <h2><span className="step">2</span> Configuration</h2>
          <div className="radio-group">
            <label>Priority Level</label>
            <div className="options priority">
              {['Low', 'Medium', 'High', 'Urgent'].map((level) => (
                <label key={level}>
                  <input type="radio" name="priority" value={level} checked={task.priority === level} onChange={handleChange} />
                  {level} Priority
                </label>
              ))}
            </div>
          </div>

          <div className="radio-group">
            <label>Initial Status</label>
            <div className="options status">
              {['Pending', 'In Progress', 'Completed'].map((status) => (
                <label key={status}>
                  <input type="radio" name="status" value={status} checked={task.status === status} onChange={handleChange} />
                  {status}
                </label>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2><span className="step">3</span> Additional Details</h2>
          <label>Due Date</label>
          <input type="date" name="dueDate" onChange={handleChange} />

          <label>Tags</label>
          <input type="text" name="tags" placeholder="e.g., urgent, client-meeting" onChange={handleChange} />
        </section>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={() => navigate('/dashboard')}>Cancel</button>
          <button type="submit" className="create-btn">+ Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

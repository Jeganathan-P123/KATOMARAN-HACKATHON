import React, { useState, useEffect } from 'react';
import './TaskManagement.css';

export default function TaskManagement() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    sortBy: 'date',
    order: 'desc',
    tag: ''
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setFilteredTasks(data);
      });
  }, []);

  useEffect(() => {
    let filtered = [...tasks];

    if (filters.status) {
      filtered = filtered.filter((t) => t.status === filters.status);
    }

    if (filters.priority) {
      filtered = filtered.filter((t) => t.priority === filters.priority);
    }

    if (filters.tag) {
      filtered = filtered.filter((t) =>
        t.tags?.some((tag) =>
          tag.toLowerCase().includes(filters.tag.toLowerCase())
        )
      );
    }

    if (filters.sortBy === 'date') {
      filtered.sort((a, b) => {
        const da = new Date(a.createdAt);
        const db = new Date(b.createdAt);
        return filters.order === 'asc' ? da - db : db - da;
      });
    }

    setFilteredTasks(filtered);
  }, [filters, tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="task-management">
      <header className="header">
        <h1>📋 Task Management</h1>
        <p>Streamline your workflow • Boost productivity</p>
        <p className="active-tag">🟢 Active Tasks • Last updated {new Date().toLocaleDateString()}</p>
      </header>

      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          name="tag"
          value={filters.tag}
          onChange={handleChange}
        />

        <select name="status" value={filters.status} onChange={handleChange}>
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select name="priority" value={filters.priority} onChange={handleChange}>
          <option value="">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>

        <select name="sortBy" value={filters.sortBy} onChange={handleChange}>
          <option value="date">Date Created</option>
        </select>

        <select name="order" value={filters.order} onChange={handleChange}>
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">🗂️ No tasks match your filters</p>
        ) : (
          filteredTasks.map((task) => (
            <div className="task-card" key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div className="meta">
                <span>Status: {task.status}</span>
                <span>Priority: {task.priority}</span>
              </div>
              <div className="tags">
                {task.tags?.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

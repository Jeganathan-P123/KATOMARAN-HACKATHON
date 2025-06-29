// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // import your styles

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username && form.password) {
      localStorage.setItem('user', JSON.stringify(form));
      navigate('/dashboard');
    } else {
      alert('Enter username and password');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h2 className="login-title">🚀 WELCOME TO TODOIST</h2>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-primary">Login</button>
        </form>

        <div className="divider">or</div>

        <button className="btn-google" onClick={handleGoogleLogin}>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="G" /> Sign in with Google
        </button>

        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

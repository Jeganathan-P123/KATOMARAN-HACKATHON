import React, { useState } from 'react';
import './Signup.css';

export default function Signup() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) return alert("Please agree to the Terms and Privacy Policy.");
    if (form.password !== form.confirmPassword)
      return alert("Passwords do not match.");
    
    // TODO: handle sign-up logic (API/Backend Integration)
    console.log('Account Created:', form);
  };

  return (
    <div className="signup-container">
      <h2>Create your account</h2>
      <p>Join Todoist and start organizing your life</p>
      
      <button className="google-btn">
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
        Continue with Google
      </button>

      <div className="divider">Or continue with email</div>

      <form onSubmit={handleSubmit}>
        <label>Full name</label>
        <input type="text" name="fullName" placeholder="Enter your full name" onChange={handleChange} required />

        <label>Email address</label>
        <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" placeholder="Create a password" onChange={handleChange} required />

        <label>Confirm password</label>
        <input type="password" name="confirmPassword" placeholder="Confirm your password" onChange={handleChange} required />

        <div className="checkbox-group">
          <input type="checkbox" name="agree" onChange={handleChange} />
          <label>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
        </div>

        <button className="create-account-btn" type="submit">
          Create account →
        </button>
      </form>
    </div>
  );
}

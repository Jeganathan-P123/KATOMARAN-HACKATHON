import React, { useState, useEffect } from 'react';
import './ProfileSettings.css';

export default function ProfileSettings() {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // Simulate fetching user profile (replace with actual API call)
  useEffect(() => {
    // Replace with API call to get user data
    const storedUser = {
      fullName: 'Jeganathan',
      email: 'jegan09870@gmail.com',
    };
    setUserData({ ...storedUser, password: '' });
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Updated profile:', userData);
    // TODO: Call backend API to update profile
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
      <h2>👤 Profile Settings</h2>
      <form onSubmit={handleUpdate}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          disabled
        />
        <label>Old Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter old password"
          onChange={handleChange}
        />
        <label>New Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter new password"
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter for confirmation"
          onChange={handleChange}
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

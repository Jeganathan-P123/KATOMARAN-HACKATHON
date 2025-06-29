// server.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();
require('./config/passport'); // Passport config

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', require('./routes/authRoutes'));
// You’ll later add: app.use('/api/tasks', require('./routes/taskRoutes'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

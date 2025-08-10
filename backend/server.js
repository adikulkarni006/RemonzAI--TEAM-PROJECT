// server.js - Your basic server for today
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
    console.log('🌟 Basic test route hit');
  res.json({ 
    message: '🚀 RemonzAi Backend is running!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'Server is healthy',
    uptime: process.uptime()
  });
});

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
    requestedUrl: req.originalUrl
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🎉 RemonzAi Backend running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
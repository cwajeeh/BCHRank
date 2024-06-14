const express = require('express');
const connectDB = require('./config/db');
const searchRoutes = require('./routes/searchRoutes');
const adminRoutes = require('./routes/adminRoutes');
const contractRoutes = require('./routes/contractRoutes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', searchRoutes);
app.use('/api/admin', adminRoutes);
// app.use('/api/contract', contractRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;

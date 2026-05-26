const express = require('express');
const app = express();

const courseRoutes = require('./courseRoutes');
const loggerMiddleware = require('./loggermiddleware');

app.use(express.json());

// Global Middleware
app.use(loggerMiddleware);

// Routes
app.use('/courses', courseRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port 3000`);
});
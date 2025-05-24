// Load environment variables at the very top
require('dotenv').config();

const express = require('express');
// const bodyParser = require('body-parser'); // express.json() and express.urlencoded() are now built-in
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS package
const Order = require('./models/Order'); // Import Order Model
const Message = require('./models/Message'); // Import Message Model

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Basic logging
console.log('Initializing server...');

// Middleware
// app.use(bodyParser.json()); // Replaced with express.json()
// app.use(bodyParser.urlencoded({ extended: true })); // Replaced with express.urlencoded()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

// MongoDB Connection
if (!MONGODB_URI) {
    console.error('FATAL ERROR: MONGODB_URI is not defined in .env file');
    process.exit(1); // Exit if URI is not set
}

mongoose.connect(MONGODB_URI, {
    // useNewUrlParser: true, // Not needed in Mongoose 6+
    // useUnifiedTopology: true // Not needed in Mongoose 6+
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Mongoose connected to database.`); // URI logging removed for security
});

db.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    // Optionally exit if cannot connect during startup, or implement retry logic
    // process.exit(1); 
});

db.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Graceful shutdown for Mongoose connection
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Mongoose connection closed due to app termination (SIGINT)');
    process.exit(0);
});
process.on('SIGTERM', async () => {
    await mongoose.connection.close();
    console.log('Mongoose connection closed due to app termination (SIGTERM)');
    process.exit(0);
});


// Placeholder for Routes
app.get('/', (req, res) => {
    res.send('Welcome to The Sweet Spot Backend API');
});

// API Route for Order Submission
app.post('/api/orders', async (req, res) => {
    try {
        // Basic validation example (can be more extensive)
        const { customerName, email, phone, cakeSize, cakeFlavor, deliveryDate } = req.body;
        if (!customerName || !email || !phone || !cakeSize || !cakeFlavor || !deliveryDate) {
            return res.status(400).json({ message: 'Missing required fields for order.' });
        }

        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json({ message: 'Order submitted successfully!', order: savedOrder });
    } catch (error) {
        console.error('Error submitting order:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Order validation failed.', errors: error.errors });
        }
        res.status(500).json({ message: 'Server error while submitting order.' });
    }
});

// API Route for Contact Form Submission
app.post('/api/messages', async (req, res) => {
    try {
        // Basic validation example
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields for message.' });
        }

        const newMessage = new Message(req.body);
        const savedMessage = await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully!', message: savedMessage });
    } catch (error) {
        console.error('Error sending message:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Message validation failed.', errors: error.errors });
        }
        res.status(500).json({ message: 'Server error while sending message.' });
    }
});


// Placeholder for future route modules
// const cakeRoutes = require('./routes/cakeRoutes'); // Example
// app.use('/api/cakes', cakeRoutes); // Example

// Handle 404 - Not Found (if no routes matched)
// This should be placed after all API routes and before the global error handler
app.use((req, res, next) => {
    res.status(404).json({ message: `Resource not found at ${req.originalUrl}` });
});

// Global Error Handling Middleware
// This should be defined after all other app.use() and route calls
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.stack || err.message || err);

    // Check if headers have already been sent
    if (res.headersSent) {
        return next(err); // Delegate to default Express error handler
    }

    res.status(err.status || 500).json({
        message: err.message || 'An unexpected server error occurred.',
        // Optionally, include stack in development mode:
        // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.log('Server script configuration complete. Waiting for connections...');

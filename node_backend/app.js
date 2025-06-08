const express = require('express');
const bodyParser = require('body-parser');
const expressip = require('express-ip');
const cors = require('cors');

const app = express();

// Define allowed origins
const allowedOrigins = [
  'http://localhost:5000', // for local development
  'https://exam-chain.vercel.app', // your deployed frontend
];

// CORS middleware
app.use(
  cors({
    origin(origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressip().getIpInfoMiddleware);

// Routes
require('./routes')(app);

module.exports = app;

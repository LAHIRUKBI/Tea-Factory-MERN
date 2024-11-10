import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Importing CORS

import signupRoute from './route/signup.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Mongo DataBase");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Middleware
app.use(cors()); // Enabling CORS for all routes
app.use(express.json()); // Parses incoming JSON requests

app.use('/api/signup', signupRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

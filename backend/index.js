import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from "./route/signup.route.js";
import employeeRouter from './route/employee.route.js';
import productRouter from './route/product.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes path
app.use("/api/signup", userRouter);
app.use('/api/employees', employeeRouter);
app.use('/api/products', productRouter);


// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(3000, () => {
  console.log('Server running on port 3000!');
});

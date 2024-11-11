// signup.route.js
import express from 'express';
import { signup } from '../controller/signup.controller.js'; // Updated path

const router = express.Router();

router.post("/", signup);

export default router;

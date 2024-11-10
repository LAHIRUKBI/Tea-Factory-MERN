// signup.route.js
import express from 'express';
import { registerUser } from '../controller/signup.controller.js'; // Updated path

const router = express.Router();

router.post('/signup', registerUser);

export default router;

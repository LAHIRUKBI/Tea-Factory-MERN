import express from 'express';
import { registerEmployee } from '../controller/employee.controller.js';

const router = express.Router();

// POST: Register Employee
router.post('/register', registerEmployee);

export default router;

import express from 'express';
import { getAllEmployees, registerEmployee } from '../controller/employee.controller.js';

const router = express.Router();

// POST: Register Employee
router.post('/register', registerEmployee);
router.get('/', getAllEmployees);

export default router;

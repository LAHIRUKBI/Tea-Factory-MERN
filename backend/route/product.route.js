import express from 'express';
import { addProduct } from '../controller/product.controller.js';

const router = express.Router();

router.post('/', addProduct);

export default router;

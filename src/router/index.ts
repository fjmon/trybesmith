import express from 'express';
import ProductsRouter from './products.routes';

const router = express.Router();

router.use('/products', ProductsRouter);

export default router;
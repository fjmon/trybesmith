import express from 'express';
import ProductsRouter from './products.routes';
import UserRouter from './user.routes';
import OrderRouter from './order.routes';
import LoginRouter from './login.routes';

const router = express.Router();

router.use('/products', ProductsRouter);
router.use('/users', UserRouter);
router.use('/orders', OrderRouter);
router.use('/login', LoginRouter);

export default router;
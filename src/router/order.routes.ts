import express from 'express';
import OrderController from '../controllers/order.controller';
import validador, { RequestEspecial } from '../utils/validador';
// fim ajuda senna
const OrderRouter = express.Router();
const ordersController = new OrderController();

OrderRouter.post(
  '/', 
  (req, res, next) => validador(req as RequestEspecial, res, next), 
  (req, res) => ordersController.create(req as RequestEspecial, res),
);

OrderRouter.get('/', ordersController.getAllOrders); // 4

export default OrderRouter;
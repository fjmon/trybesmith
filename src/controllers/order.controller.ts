import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import orderValidation from '../middleware/order.valid';
// import 'dotenv/config';
import { RequestEspecial } from '../utils/validador';
// fim
export default class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  public create = async (req: RequestEspecial, res: Response) => {
    const error = orderValidation(req.body);
    const { productsIds } = req.body;
    const id = req.user;

    if (error !== undefined) {
      if (error.details[0].message.includes('required')) {
        return res.status(400).json({ message: error.details[0].message });
      } 
      return res.status(422).json({ message: error.details[0].message });
    }
    res.status(201).json(await this.orderService.create(productsIds, id));
  };

  public getAllOrders = async (req: Request, res: Response) => {
    res.status(200).json(await this.orderService.getAllOrders());
  };
}

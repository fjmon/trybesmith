import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces';
// fim
export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public async create(order: number[], userId: number): Promise<IOrder> {
    return this.orderModel.create(order, userId);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    return this.orderModel.getAllOrders();
  }
}
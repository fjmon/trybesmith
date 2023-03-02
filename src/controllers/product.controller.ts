import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(
    private productService = new ProductService(),
  ) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };

  // public getAllUsersController = async (req: Request, res: Response) => {
  //   const users = this.productService.getAllUsersService();

  //   return res.status(200).json(users);
  // };
}

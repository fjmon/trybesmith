import { Request, Response } from 'express';
import ProductService from '../services/product.service';
// fim
export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    res.status(201).json(await this.productService.create(req.body));
  };

  public getAllProd = async (req: Request, res: Response) => {
    res.status(200).json(await this.productService.getAllProd());
  };
}

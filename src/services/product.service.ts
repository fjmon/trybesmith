import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { IProduct } from '../interfaces';
// fim
export default class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> {
    return this.productModel.create(product);
  }

  public async getAllProd(): Promise<IProduct[]> {
    return this.productModel.getAllProd();    
  }
}

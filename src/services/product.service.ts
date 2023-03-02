import { IProduct } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product: IProduct): Promise<IProduct> {
    return this.model.create(product);
  }

  public async getAllProductsService(): Promise<IProduct[]> {
    return this.model.getAllProductsModel();    
  }
}

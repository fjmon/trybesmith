import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';
// fim
export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getAllProd(): Promise<IProduct[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    return result as IProduct[];
  }
}
// teste
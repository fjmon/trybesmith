import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getAllProductsModel(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.products';

    const [result] = await this.connection.execute(query);
    return result as IProduct[];
  }
}

/*
  async findAll(): Promise<IProduct[]> {
    const [result] = await connection.execute(
      'SELECT * FROM products',
    );
  }
}
*/
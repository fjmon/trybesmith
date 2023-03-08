import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces';
// final
export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(order: number[], userId: number): Promise<IOrder> {
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [userId],
    );

    const { insertId } = dataInserted;
    await Promise.all(order.map(async (product) => 
      this.connection.execute<ResultSetHeader>(
        `UPDATE Trybesmith.products
      SET Trybesmith.products.order_id = ?
      WHERE Trybesmith.products.id = ?`,
        [insertId, product],
      )));
    return { userId, productsIds: order };
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const [result] = await this.connection.execute(`
    SELECT 
    Trybesmith.orders.id, 
    Trybesmith.orders.user_id AS userId, 
    JSON_ARRAYAGG(Trybesmith.products.id) AS productsIds
    FROM Trybesmith.orders
    LEFT JOIN Trybesmith.products
    ON Trybesmith.products.order_id = Trybesmith.orders.id
    GROUP BY Trybesmith.orders.id
`);

    return result as IOrder[];
  }
}
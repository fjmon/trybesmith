import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(body: IUser): Promise<IUser> {
    const { username, classe, level, password } = body;
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    const { insertId } = dataInserted;
    return { id: insertId, ...body };
  }
}
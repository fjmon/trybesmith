import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
// fim
export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [user.username, user.vocation, user.level, user.password],
    );

    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}
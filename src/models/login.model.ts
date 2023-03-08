import { Pool } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces';
// fim
export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(login: ILogin): Promise<IUser[]> {
    const [result] = await this.connection.execute(`
    SELECT * FROM Trybesmith.users
        WHERE username = ? 
        AND password = ?;
        `, [login.username, login.password]);
    return result as IUser[];
  }
}
import connection from '../models/connection';
import LoginModel from '../models/login.model';
import { ILogin, IUser } from '../interfaces';
// fim
export default class LoginService {
  public loginModel: LoginModel;

  constructor() {
    this.loginModel = new LoginModel(connection);
  }

  public async login(login: ILogin): Promise<IUser[]> {
    const result = await this.loginModel.login(login);
    if (!result) throw new Error();
    return result;
  }
}
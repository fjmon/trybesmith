import connection from '../models/connection';
import UserModel from '../models/user.model';
import { IUser } from '../interfaces';
// fim  
export default class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public async create(body: IUser) {
    return this.userModel.create(body);
  }
}

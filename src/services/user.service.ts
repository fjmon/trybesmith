import connection from '../models/connection';
import UserModel from '../models/user.model';
import { IUser } from '../interfaces';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(body: IUser): Promise<IUser> {
    return this.model.create(body);
  }
}

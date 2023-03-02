import { Request, Response } from 'express';
import UserService from '../services/user.service';
import createToken from '../utils/jwt';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const { body } = req.body;

    const token = createToken;

    await this.userService.create(body);
    return res.status(201).json({ token });
  };
}
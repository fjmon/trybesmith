import { Request, Response } from 'express';
import UserService from '../services/user.service';
import jwt from '../utils/jwt';
// fim
export default class UserController {
  private userService: UserService;

  constructor() { 
    this.userService = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const token = jwt(await this.userService.create(req.body));
    res.status(201).json({ token });
  };
}
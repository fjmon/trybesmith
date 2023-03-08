import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import jwt from '../utils/jwt';
// fim
export default class LoginController {
  loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const verifLogin = await this.loginService.login(req.body);
    if (verifLogin.length === 0) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const token = jwt(verifLogin[0]);
    res.status(200).json({ token });
  };
} 
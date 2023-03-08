import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import { IUser } from '../interfaces';
import connection from '../models/connection';

const secret = process.env.JWT_SECRET || 'senhaSecreta';
const verifUsername = async (username: string): Promise<IUser[]> => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ?', 
    [username],
  );
  return result as IUser[];
};

export interface RequestEspecial extends Request {
  user: number;
}
export default async (req: RequestEspecial, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    if (typeof decoded !== 'string') {
      await verifUsername(decoded.data.username);
      req.user = decoded.data.id;
    }
  
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
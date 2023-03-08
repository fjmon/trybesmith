import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';

const secret = process.env.JWT_SECRET || 'segredoSuperSecreto';

export default (user: IUser) => {
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return token;
}; 
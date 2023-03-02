import jwt from 'jsonwebtoken';
import { Payload } from '../interfaces';

const JWT_SECRET = 'senha_secreta';

const createToken = (body: Payload): string => {
  const token = jwt.sign({ body }, JWT_SECRET, {
    expiresIn: 'Id',
  });
  return token;
};

export default createToken;
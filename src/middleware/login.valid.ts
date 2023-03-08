import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import { ILogin } from '../interfaces';
// fim
const jois = joi.string().required();
const validateBody = (user: ILogin) => joi.object({
  username: jois,
  password: jois,
}).required().messages({
  'string.empty': '{#label} is required',
}).validate(user);

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateBody(req.body);
  if (error !== undefined) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};
  
export default loginValidation;
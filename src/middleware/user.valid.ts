import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import { IUser } from '../interfaces';
// fim2
const jois = joi.string().min(3).required(); 
const joisL = joi.number().min(1).required(); 
const joisP = joi.string().min(8).required(); 
const validateBody = (user: IUser) => joi.object({
  username: jois,
  vocation: jois,
  level: joisL,
  password: joisP,
}).required().messages({
  'string.empty': '{#label} is required',
  'string.base': '{#label} must be a string',
  'string.min': '{#label} length must be at least {#limit} characters long',
  'number.empty': '{#label} is required',
  'number.base': '{#label} must be a number',
  'number.min': '{#label} must be greater than or equal to 1',
}).validate(user);

const userValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateBody(req.body);
  if (error !== undefined) {
    if (error.details[0].message.includes('required')) {
      return res.status(400).json({ message: error.details[0].message });
    } 
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

export default userValidation;
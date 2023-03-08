import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import { IProduct } from '../interfaces';
// fim
const jois = joi.string().min(3).required();
const validateBody = (product: IProduct) => joi.object({
  name: jois,
  amount: jois,
}).required().messages({
  'string.empty': '{#label} is required',
  'string.base': '{#label} must be a string',
  'string.min': '{#label} length must be at least 3 characters long',
}).validate(product);

const productValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateBody(req.body);
  if (error !== undefined) {
    if (error.details[0].message.includes('required')) {
      return res.status(400).json({ message: error.details[0].message });
    } 
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

export default productValidation;
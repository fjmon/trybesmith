import joi from 'joi';
import { IProductsIds } from '../interfaces';
// fim
export default (productsIds: IProductsIds) => {
  const { error } = joi.object({
    productsIds: joi.array().items(joi.number())
      .min(1).required()
      .messages({
        'array.required': '{#label} is required',
        'array.min': '{#label} must include only numbers',
        'items.empty': '{#label} must include only numbers',
        'array.base': '{#label} must be an array',
      }),
  }).validate(productsIds);

  return error;
};
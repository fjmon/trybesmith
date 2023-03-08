import express from 'express';
import ProductsController from '../controllers/product.controller';
import productValidation from '../middleware/product.valid';

const ProductsRouter = express.Router();
const productsController = new ProductsController();

ProductsRouter.post('/', productValidation, productsController.create);
ProductsRouter.get('/', productsController.getAllProd);

export default ProductsRouter;
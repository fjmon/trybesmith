import express from 'express';
import ProductsController from '../controllers/product.controller';

const ProductsRouter = express.Router();
const productsController = new ProductsController();

ProductsRouter.post('/', productsController.create);

export default ProductsRouter;
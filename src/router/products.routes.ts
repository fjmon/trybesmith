import express from 'express';
import ProductsController from '../controllers/product.controller';

const ProductsRouter = express.Router();
const productsController = new ProductsController();

ProductsRouter.post('/', productsController.create);
ProductsRouter.get('/', productsController.getAllProductsController);

export default ProductsRouter;
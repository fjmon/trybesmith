import express from 'express';
import LoginController from '../controllers/login.controller';
import loginValidation from '../middleware/login.valid';

const LoginRouter = express.Router();
const loginController = new LoginController();

LoginRouter.post('/', loginValidation, loginController.login);

export default LoginRouter;
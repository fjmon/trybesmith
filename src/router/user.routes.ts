import express from 'express';
import UserController from '../controllers/user.controller';
import userValidation from '../middleware/user.valid';

const UserRouter = express.Router();
const userController = new UserController();

UserRouter.post('/', userValidation, userController.create);

export default UserRouter;
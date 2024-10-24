import { Router } from 'express';
import { userController } from '../controllers/userController';
import { userService } from '../services/userService';

const userControllerInstance = new userController(new userService());
const router = Router();

router.post('/', userControllerInstance.createUser);

export default router;
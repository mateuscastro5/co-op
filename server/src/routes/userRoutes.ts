import { Router } from 'express';
import { userController } from '../controllers/userController';
import { userService } from '../services/userService';

const userControllerInstance = new userController(new userService());
const router = Router();

router.post('/register', userControllerInstance.createUser);
router.post('/login', userControllerInstance.loginUser);

export default router;
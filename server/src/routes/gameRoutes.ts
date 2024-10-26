import { Router } from 'express';
import { gameController } from '../controllers/gameController';
import { gameService } from '../services/gameService';

const gameServiceInstance = new gameService();
const gameControllerInstance = new gameController(gameServiceInstance);


const router = Router();

router.post('/', gameControllerInstance.createGame);
router.post('/games', gameControllerInstance.createGame);

export default router;
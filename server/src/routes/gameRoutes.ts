import { Router } from 'express';
import { GameController } from '../controllers/gameController';
import { GameService } from '../services/gameService';

const gameServiceInstance = new GameService();
const gameControllerInstance = new GameController(gameServiceInstance);


const router = Router();

router.post('/games', gameControllerInstance.createGame);

export default router;
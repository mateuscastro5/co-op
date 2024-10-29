import { Router } from 'express';
import { GameController } from '../controllers/gameController';
import { GameService } from '../services/gameService';

const gameServiceInstance = new GameService();
const gameControllerInstance = new GameController(gameServiceInstance);


const router = Router();

router.post('/', gameControllerInstance.createGame);

router.get('/', async (req, res) => {
    try {
        const games = await gameServiceInstance.listGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar os jogos", error });
    }
});

export default router;
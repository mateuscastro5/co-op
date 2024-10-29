import { Request, Response } from 'express';
import {GameService} from "../services/gameService";

export class GameController {
    private gameService: GameService;

    constructor(gameService: GameService) {
        this.gameService = gameService;
    }

    public createGame = async (req: Request, res: Response) => {
        try {
            const newGame = await this.gameService.createGame(req.body);
            res.status(201).json(newGame);
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar o jogo", error });
        }
    }
}
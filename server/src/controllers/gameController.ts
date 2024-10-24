import { Request, Response } from 'express';
import { gameService } from '../services/gameService'; 

export class gameController {
    private gameService: gameService;

    constructor(gameService: gameService) {
        this.gameService = gameService;
    }

    public createGame = async (req: Request, res: Response) => {
        const newGame = await this.gameService.createGame(req.body);
        res.status(201).json(newGame);
}};
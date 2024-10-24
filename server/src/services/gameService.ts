import { Game } from '../models/gameModel';

export class gameService {
    private games: Game[] = [];



    public async createGame(newGame: Game): Promise<Game> {
        newGame.id = (this.games.length + 1)
        this.games.push(newGame);
        return newGame;
    }
}
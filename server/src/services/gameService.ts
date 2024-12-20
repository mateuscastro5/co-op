import { Game } from '../models/gameModel';

export class GameService {
    private games: Game[] = [];



    public async createGame(newGame: Game): Promise<Game> {
        newGame.id = (this.games.length + 1)
        this.games.push(newGame);
        return newGame;
    }

    public async listGames(): Promise<Game[]> {
        return this.games;
    }
}
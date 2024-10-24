export interface Game {
    id: number;
    title: string;
    genre: string;
    status: string;
    releaseDate: Date;
    developer: string;
    publisher: string;
    platforms: string[];
    rating: number;
}
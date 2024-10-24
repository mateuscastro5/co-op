import { User } from '../models/userModel';

export class userService {
    private users: User[] = [];

    public async createUser(newUser: User): Promise<User> {
        newUser.id = (this.users.length + 1)
        this.users.push(newUser);
        return newUser;
    }
}
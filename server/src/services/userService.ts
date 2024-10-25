import { User } from '../models/userModel';

export class userService {
    private users: User[] = [];

    public async createUser(newUser: User): Promise<User> {
        newUser.id = (this.users.length + 1)
        this.users.push(newUser);
        return newUser;
    }

    public async loginUser(user: User): Promise<User> {
        const userExists = this.users.find((u) => u.email === user.email && u.password === user.password);
        if (!userExists) {
            throw new Error('User not found');
        }
        return userExists;
    }
}
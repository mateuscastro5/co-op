import { userService } from "../services/userService";
import { Request, Response } from "express";

export class userController {
    private userService: userService;

    constructor(userService: userService) {
        this.userService = userService;
    }

    public createUser = async (req: Request, res: Response) => {
        const newUser = await this.userService.createUser(req.body);
        res.status(201).json(newUser);
    }
}
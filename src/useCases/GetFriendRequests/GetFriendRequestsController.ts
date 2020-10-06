import { Request, Response } from "express";
import { GetFriendRequestsUseCase } from "./GetFriendRequestsUseCase";

export class GetFriendRequestsController {
    constructor (
        private useCase: GetFriendRequestsUseCase
    ) { }

    async handle(req: Request, res: Response) {
        const username = req.session!.username;
        try {
            const requests = await this.useCase.execute({ username });
            return res.json(requests);
        } catch(err) {
            err.handle(res)
        }
    }
}
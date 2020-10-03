import { Request, Response } from 'express';
import { SendFriendRequestUseCase } from './SendFriendRequestUseCase';

export class SendFriendRequestController {
    constructor(
        private useCase: SendFriendRequestUseCase
    ) { }

    async handle(req: Request, res: Response) {
        const senderUsername = req.session!.username;

        if (!senderUsername) {
            res.status(401).send();
        }
        
        try {
            await this.useCase.execute({
                from_username: senderUsername,
                to_username: req.body.to
            });

            res.status(201).send();
        } catch (err) {
            err.handle(res);
        }
    }
}
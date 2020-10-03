import { Request, Response } from 'express';
import { SendFriendRequestUseCase } from './SendFriendRequestUseCase';
import { InvalidUsernameError, AlreadyHasRequestError, AlreadyFriendsError } from './SendFriendRequestErrors';

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
            if (err instanceof InvalidUsernameError) {
                res.status(400).send("The username is invalid.")
            } else if (err instanceof AlreadyHasRequestError) {
                res.status(400).send("There is already a friend request pending.");
            } else if (err instanceof AlreadyFriendsError) {
                res.status(400).send("The users are already friends.");
            } else {
                res.status(500).send("Unknown error.");
            }
        }
    }
}
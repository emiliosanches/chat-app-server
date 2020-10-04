import { Request, Response } from "express";
import { AnswerFriendRequestUseCase } from './AnswerFriendRequestUseCase';
    
export class AnswerFriendRequestController {
    constructor(
        private useCase: AnswerFriendRequestUseCase
    ) { }


    async handle(req: Request, res: Response) {
        try {
            await this.useCase.execute({
                accept: req.body.accept,
                friendRequestID: req.params.id
            });
            res.status(200).send();
        } catch (err) {
            err.handle(res);
        }
    }
}
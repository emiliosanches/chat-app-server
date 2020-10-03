import { Request, Response } from "express";
import { InvalidValue } from "./CreateUserRequestErrors";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor (
        private useCase: CreateUserUseCase
    ) {}
    
    async handle(req: Request, res: Response) {
        try {
            await this.useCase.execute(req.body);
            res.status(201).send();
        } catch (err) {
            err.handle(res);
        }
    }
}
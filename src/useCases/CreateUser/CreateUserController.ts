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
        } catch (err) {
            if (err instanceof InvalidValue)
                return res.status(400).json({
                    error: err.message,
                    wrongFields: err.fields
                });
            else {
                console.log(err)
                return res.status(500).send("An unexpected error ocurred!");
            }
        }

        res.status(201).send();
    }
}
import { Request, Response } from 'express';
import { InvalidUsername, WrongPassword } from './AuthUserRequestErrors';
import { AuthUserUseCase } from './AuthUserUseCase';


export class AuthUserController {
    constructor(
        private useCase: AuthUserUseCase
    ) { }
    
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            await this.useCase.execute({
                username,
                password
            });
            req.session!.username = req.body.username;
            return res.status(200).send();
        } catch (err) {
            return err.handle(res);
        }
    }
}
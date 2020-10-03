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
        } catch (err) {
            if (err instanceof InvalidUsername) {
            }
            
            if (err instanceof WrongPassword) {
                return res.status(403).send();
            }
            console.log(err)
            return res.status(500).send();
        }

        req.session!.username = req.body.username;
        
        res.status(200).send();
    }
}
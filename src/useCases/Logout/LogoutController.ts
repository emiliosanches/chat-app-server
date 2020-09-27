import { Request, Response } from 'express';

export class LogoutController {
    handle(req: Request, res: Response) {
        req.session!.destroy((err: any) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            res.status(200).send();
        });
    }
}
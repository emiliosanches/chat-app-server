import { Request, Response } from "express";

export class GetLoggedController {
    handle(req: Request, res: Response) {
        res.status(200).json({
            logged: req.session!.username !== undefined,
            user: req.session!.username
        });
    }
} 
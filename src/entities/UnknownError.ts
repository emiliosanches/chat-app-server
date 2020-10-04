import { Response } from 'express';

export class UnknownError extends Error {
    constructor(message?: string) {
        super("Unknown error.");
    }

    handle(res: Response) {
        res.status(500).send("Unknown error.");
    }
}
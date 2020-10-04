import { Response } from "express";

export class InvalidData extends Error {
    constructor(message?: string) {
        super(message || "Invalid data.");
    }

    handle(res: Response) {
        res.status(400).send(this.message);
    }
}
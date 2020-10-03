import { Response } from "express";

export class InvalidUsername extends Error {
    constructor() {
        super("Could not find user with given username.");
    }

    handle(res: Response) {
        return res.status(401).send();
    }
}

export class WrongPassword extends Error {
    constructor() {
        super("The given password is incorrect.");
    }

    handle(res: Response) {
        return res.status(403).send();
    }
}

export class UnknownError extends Error {
    constructor(message?: string) {
        super("Unknown error.");
    }

    handle(res: Response) {
        res.status(500).send("Unknown error.");
    }
}
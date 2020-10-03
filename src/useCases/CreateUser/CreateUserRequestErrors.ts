import { Response } from 'express';

export class InvalidValue extends Error {
    constructor(
        public fields: string[]
    ) {
        super("Invalid fields.");
    }

    handle(res: Response) {
        return res.status(400).json({
            error: this.message,
            wrongFields: this.fields
        });
    }
}

export class UnknownError extends Error {
    constructor(message?: string) {
        super(message || "Unknown Error.");
    }

    handle(res: Response) {
        return res.status(500).send("Unknown error.");
    }
}
import { Response } from "express";

export class InvalidUsernameError extends Error {
    constructor(message?: string) {
        super(message || "The username is invalid!")
    }

    handle(res: Response) {
        res.status(400).send("The username is invalid.")
    }
}

export class AlreadyFriendsError extends Error {
    constructor(message?: string) {
        super(message || "There is already a friendship between the users.");
    }

    handle(res: Response) {
        res.status(400).send("The users are already friends.");
    }
}

export class AlreadyHasRequestError extends Error {
    constructor(message?: string) {
        super(message || "There is already a friend request between the users.");
    }

    handle(res: Response) {
        res.status(400).send("There is already a friend request pending.");
    }
}

export class UnknownError extends Error {
    constructor(message?: string) {
        super(message || "An unknown error happened.");
    }

    handle(res: Response) {
        res.status(500).send("Unknown error.")
    }
}
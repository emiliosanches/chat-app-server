export class InvalidUsername extends Error {
    constructor() {
        super("Could not find user with given username.");
    }
}

export class WrongPassword extends Error {
    constructor() {
        super("The giver password is incorrect.");
    }
}
export class InvalidUsernameError extends Error {
    constructor(message?: string) {
        super(message || "The username is invalid!")
    }
}

export class AlreadyFriendsError extends Error {
    constructor(message?: string) {
        super(message || "There is already a friendship between the users.");
    } 
}

export class AlreadyHasRequestError extends Error {
    constructor(message?: string) {
        super(message || "There is already a friend request between the users.");
    }
}
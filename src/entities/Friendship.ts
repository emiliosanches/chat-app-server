import { uuid } from 'uuidv4';

export class Friendship {
    id: string;
    user1: string;
    user2: string;

    constructor(user1: string, user2: string, id?: string) {
        this.user1 = user1;
        this.user2 = user2;
        this.id = id || uuid();
    }
}
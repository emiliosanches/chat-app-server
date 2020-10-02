import { Friendship } from "../entities/Friendship";
import { User } from "../entities/User";

export interface IFriendsRepository {
    save(data: Friendship): Promise<void>;
    update(data: Partial<Friendship>): Promise<void>;
    index(username: string): Promise<User[]>;
}
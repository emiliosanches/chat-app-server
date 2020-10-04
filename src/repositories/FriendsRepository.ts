import { Friendship } from "../entities/Friendship";
import { User } from "../entities/User";

export interface IFriendsRepository {
    save(data: Friendship): Promise<void>;
    update(data: Partial<Friendship> & Pick<Friendship, 'id'>): Promise<void>;
    delete(id: string): Promise<any>;
    index(username: string): Promise<User[]>;
    alreadyFriends(user1: string, user2: string): Promise<Friendship | undefined>;
}
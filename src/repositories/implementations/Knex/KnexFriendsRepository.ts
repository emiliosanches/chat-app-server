import { Friendship } from "../../../entities/Friendship";
import { User } from "../../../entities/User";
import { IFriendsRepository } from "../../FriendsRepository";
import { knex } from './connection';

export class KnexFriendsRepository implements IFriendsRepository {
    save(data: Friendship): Promise<void> {
        return knex('TBFriends').insert(data);
    }

    update(data: Partial<Friendship>): Promise<void> {
        return knex('TBFriends').update(data);
    }

    index(username: string): Promise<User[]> {
        return knex('TBUsers')
            .select('*')
            .whereIn(
                'username',
                knex('TBFriends')
                    .select('user1')
                    .where('user2', username)
            ).orWhereIn(
                'username',
                knex('TBFriends')
                    .select('user2')
                    .where('user1', username)
            )
    }
}
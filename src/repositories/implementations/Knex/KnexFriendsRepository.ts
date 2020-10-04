import { Friendship } from "../../../entities/Friendship";
import { User } from "../../../entities/User";
import { IFriendsRepository } from "../../FriendsRepository";
import { knex } from './connection';

export class KnexFriendsRepository implements IFriendsRepository {
    save(data: Friendship): Promise<void> {
        return knex('TBFriends').insert(data);
    }

    update(data: Partial<Friendship> & Pick<Friendship, 'id'>): Promise<void> {
        return knex('TBFriends').where('id', data.id).update(data);
    }

    delete(id: string): Promise<any> {
        return knex('TBFriends').delete().where('id', id);
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

    async alreadyFriends(user1: string, user2: string): Promise<Friendship | undefined> {
        const result = await knex('TBFriends').where({
            user1,
            user2
        }).orWhere({
            user1: user2,
            user2: user1
        });

        if (result.length === 0) return;

        const friendshipData = result[0];

        return new Friendship(friendshipData.user1, friendshipData.user2, friendshipData.id, friendshipData.accepted);
    }
}
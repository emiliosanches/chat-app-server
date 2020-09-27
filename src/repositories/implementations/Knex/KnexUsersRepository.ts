import { User } from "../../../entities/User";
import { IUsersRepository } from "../../UsersRepository";
import { knex } from './connection';

export class KnexUsersRepository implements IUsersRepository {
    async save(user: User): Promise<void> {
        return knex('TBUsers').insert(await user.hashPass());
    }

    async findByUsername(userName: string): Promise<User | undefined> {
        const users = await knex('TBUsers').select<User[]>('*').where('username', userName);
        const user = users[0];

        if (!user) return undefined;

        const { username, password, display_name, avatar_url } = user;
        return new User(username, password, display_name, avatar_url);
    }

    index(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
}
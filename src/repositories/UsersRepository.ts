import { User } from "../entities/User";

export interface IUsersRepository {
    save(user: User): Promise<void>;
    findByUsername(username: string): Promise<User | undefined>;
    index(): Promise<User[]>;
}
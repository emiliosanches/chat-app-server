import { User } from '../../entities/User';
import { IUsersRepository } from "../../repositories/UsersRepository";
import { InvalidUsername, UnknownError, WrongPassword } from "./AuthUserRequestErrors";
import { AuthUserRequestDTO } from "./AuthUserRequestDTO";

export class AuthUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: AuthUserRequestDTO): Promise<void> {
        const { username, password } = data;

        if (!username) throw new InvalidUsername();

        if (!password) throw new WrongPassword();

        let user;

        try {
            user = await this.usersRepository.findByUsername(username);
        } catch {
            throw new UnknownError();
        }

        if (!user) {
            throw new InvalidUsername();
        }

        if (!await user.comparePass(password)) {
            throw new WrongPassword();
        }
    }
}
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/UsersRepository";
import { CreateUserRequestDTO } from "./CreateUserRequestDTO";
import { InvalidValue, UnknownError } from "./CreateUserRequestErrors";

export class CreateUserUseCase {
    constructor(
       private usersRepository: IUsersRepository 
    ) { }
    
    async execute(data: CreateUserRequestDTO) {
        const { username, password, avatar_url, display_name } = data;

        const invalidFields = [];

        if (!username || await this.usersRepository.findByUsername(username)) 
            invalidFields.push('username');
        
        if (!password || !password.match( //Ao menos uma letra maiúscula, uma minúscula e um caractere especial. Entre 8 e 30 caracteres.
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!\.\ %&*?])[A-Za-z\d#$@!\.\ %&*?]{8,30}$/
        ))
            invalidFields.push('password');
        
        if (invalidFields[0]) throw new InvalidValue(invalidFields);
        
        const user = new User(username, password, display_name, avatar_url);

        try {
            await this.usersRepository.save(user);
        } catch {
            throw new UnknownError();
        }
    }
}
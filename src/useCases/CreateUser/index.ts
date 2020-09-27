import { KnexUsersRepository } from "../../repositories/implementations/Knex/KnexUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const knexUsersRepository = new KnexUsersRepository();
const createUserUseCase = new CreateUserUseCase(knexUsersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
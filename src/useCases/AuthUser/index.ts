import { KnexUsersRepository } from "../../repositories/implementations/Knex/KnexUsersRepository";
import { AuthUserController } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";

const repository = new KnexUsersRepository();
const authUserUseCase = new AuthUserUseCase(repository);
const authUserController = new AuthUserController(authUserUseCase);

export { authUserController };
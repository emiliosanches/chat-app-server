import { SendFriendRequestUseCase } from "./SendFriendRequestUseCase";
import { SendFriendRequestController } from "./SendFriendRequestController";
import { KnexFriendsRepository } from "../../repositories/implementations/Knex/KnexFriendsRepository";
import { KnexUsersRepository } from "../../repositories/implementations/Knex/KnexUsersRepository";


const friendsRepository = new KnexFriendsRepository();
const usersRepository = new KnexUsersRepository();
const useCase = new SendFriendRequestUseCase(friendsRepository, usersRepository);

export const sendFriendRequestController = new SendFriendRequestController(useCase);
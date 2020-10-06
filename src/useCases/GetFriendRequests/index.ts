import { KnexFriendsRepository } from "../../repositories/implementations/Knex/KnexFriendsRepository";
import { GetFriendRequestsController } from "./GetFriendRequestsController";
import { GetFriendRequestsUseCase } from "./GetFriendRequestsUseCase";

const friendsRepository = new KnexFriendsRepository();
const getFriendRequestsUseCase = new GetFriendRequestsUseCase(friendsRepository)
export const getFriendRequestsController = new GetFriendRequestsController(getFriendRequestsUseCase);
import { KnexFriendsRepository } from '../../repositories/implementations/Knex/KnexFriendsRepository';
import { AnswerFriendRequestUseCase } from './AnswerFriendRequestUseCase';
import { AnswerFriendRequestController } from "./AnswerFriendRequestController";

const friendsRepository = new KnexFriendsRepository();
const answerFriendRequestUseCase = new AnswerFriendRequestUseCase(friendsRepository);
export const answerFriendRequestController = new AnswerFriendRequestController(answerFriendRequestUseCase);

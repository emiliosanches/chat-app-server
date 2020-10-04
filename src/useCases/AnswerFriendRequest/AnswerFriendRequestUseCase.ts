import { UnknownError } from "../../entities/UnknownError";
import { IFriendsRepository } from "../../repositories/FriendsRepository";
import { AnswerFriendRequestDTO } from "./AnswerFriendRequestDTO";
import { InvalidData } from "./AnswerFriendRequestError";

export class AnswerFriendRequestUseCase {
    constructor(
        private friendsRepository: IFriendsRepository
    ) { }

    async execute(data: AnswerFriendRequestDTO) {
        if (typeof data.accept !== "boolean") {
            throw new InvalidData();
        }

        if (typeof data.friendRequestID !== "string") {
            throw new InvalidData("Could not find friend request");
        }
            
        if (data.accept) {
            try {
                await this.friendsRepository.update({
                    id: data.friendRequestID,
                    accepted: true
                });
            } catch {
                throw new UnknownError();
            }
        } else {
            try {
                await this.friendsRepository.delete(data.friendRequestID);
            } catch {
                throw new UnknownError();
            }
        }
    }
}
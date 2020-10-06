import { IUsersRepository } from "../../repositories/UsersRepository";
import { IFriendsRepository } from "../../repositories/FriendsRepository";
import { UnknownError } from "../../entities/UnknownError";

export class GetFriendRequestsUseCase {
    constructor (
        private friendsRepo: IFriendsRepository
    ) { }

    async execute(data: GetFriendRequestsDTO) {
        try {
            const requests = this.friendsRepo.index(data.username);
            return requests;
        } catch {
            throw new UnknownError();
        }
    }
}
import { Friendship } from "../../entities/Friendship";
import { IFriendsRepository } from "../../repositories/FriendsRepository";
import { IUsersRepository } from "../../repositories/UsersRepository";
import { SendFriendRequestDTO } from "./SendFriendRequestDTO";
import { AlreadyFriendsError, AlreadyHasRequestError, InvalidUsernameError, UnknownError } from "./SendFriendRequestErrors";

export class SendFriendRequestUseCase {
    constructor(
        private friendsRepository: IFriendsRepository,
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: SendFriendRequestDTO): Promise<void> {
        const to = await this.usersRepository.findByUsername(data.to_username || '');
        
        if (!to) {
            throw new InvalidUsernameError();
        }

        const alreadyFriends = await this.friendsRepository.alreadyFriends(data.from_username, data.to_username);

        if (alreadyFriends) {
            if (alreadyFriends.accepted) {
                throw new AlreadyFriendsError();
            } else {
                throw new AlreadyHasRequestError();
            }
        }

        const friendship = new Friendship(data.from_username, data.to_username);
        
        try {
            await this.friendsRepository.save(friendship);
        } catch {
            throw new UnknownError();
        }
    }
}
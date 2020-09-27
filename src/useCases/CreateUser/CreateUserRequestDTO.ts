export interface CreateUserRequestDTO {
    username: string;
    display_name?: string;
    avatar_url?: string;
    password: string;
}
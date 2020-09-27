import bcrypt from 'bcrypt';

export class User {
    username: string;
    display_name: string;
    avatar_url?: string;
    password: string;

    constructor(username: string, password: string, displayName = username, avatarUrl?: string) {
        this.username = username;
        this.display_name = displayName;
        this.avatar_url = avatarUrl;
        this.password = password;
    }

    async comparePass(plainPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, this.password);
    }

    async hashPass(): Promise<this> {
        const hashpass = await bcrypt.hash(this.password, 12);
        this.password = hashpass;
        return this;
    }
}
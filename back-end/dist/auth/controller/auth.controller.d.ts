import { AuthService } from '../service/auth.service';
import { User } from '../../user/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: {
        username: string;
        password: string;
        name: string;
    }): Promise<User>;
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
        sub: any;
    } | {
        message: string;
    }>;
    getProfile(): Promise<User[]>;
    getProfileById(id: string): Promise<User>;
}

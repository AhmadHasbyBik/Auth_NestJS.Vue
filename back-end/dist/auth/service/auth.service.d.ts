import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    register(username: string, password: string, name: string): Promise<User>;
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        sub: any;
    }>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
}

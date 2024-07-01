import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { User } from '../../user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: { username: string; password: string; name: string },
  ) {
    return this.authService.register(body.username, body.password, body.name);
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );

    if (body.username != user.username) {
      return { message: 'Invalid username' };
    }

    if (body.password != user.password) {
      return { message: 'Invalid password' };
    }

    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile') // Menggunakan @Get untuk endpoint profile
  async getProfile(): Promise<User[]> {
    return this.authService.getAllUsers();
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    /**
     * Inject auth service
     */
    private readonly authService: AuthService,
  ) {}

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return { message: 'Login successfully', loginDto };
  }
}

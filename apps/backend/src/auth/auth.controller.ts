import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './providers/auth.service';
import { MarkPublic } from './decorators/public.decorator';
import { REQUEST_USER_KEY } from 'src/constants/auth.keys';
import { JwtUserPayload } from './interfaces/jwt-user-payload';

@Controller('auth')
export class AuthController {
  constructor(
    /**
     * Inject auth service
     */
    private readonly authService: AuthService,
  ) {}

  @MarkPublic()
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('/me')
  getUser(@Request() req: any) {
    const user = req[REQUEST_USER_KEY] as JwtUserPayload;
    return this.authService.getSignedInUser(user.sub);
  }
}

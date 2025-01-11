import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './providers/user.service';
import { CreateUserDto } from './dtos/user.dto';
import { MarkPublic } from 'src/auth/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MarkPublic()
  @Post('create-user')
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}

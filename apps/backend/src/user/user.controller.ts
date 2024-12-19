import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './providers/user.service';
import { CreateUserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}

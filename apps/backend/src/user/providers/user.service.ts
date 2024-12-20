import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor() {}

  createUser(user: CreateUserDto) {
    return { msg: 'user created!', user };
  }
}

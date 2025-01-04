import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    /**
     * @description
     * Injecting user repository
     */
    @InjectRepository(Users)
    private readonly userRepo: Repository<Users>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }
}

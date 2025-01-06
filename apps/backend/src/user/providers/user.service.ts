import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserProvider } from './create-user.provider';

@Injectable()
export class UserService {
  constructor(
    /**
     * @description
     * Injecting user repository
     */
    @InjectRepository(Users)
    private readonly userRepo: Repository<Users>,

    /**
     * Inject creatUserProvider
     */
    private readonly createUserProvider: CreateUserProvider,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.createUserProvider.createUser(createUserDto);
  }

  async findUserByEmail(email: string) {
    return this.userRepo.findOneBy({ email });
  }
}

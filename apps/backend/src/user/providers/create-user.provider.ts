import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/user.dto';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import {
  TIMEOUT_MESSAGE,
  USER_ALREADY_EXIST,
} from 'src/constants/error.messages';

@Injectable()
export class CreateUserProvider {
  constructor(
    /**
     * @description
     * Injecting user repository
     */
    @InjectRepository(Users)
    private readonly userRepo: Repository<Users>,
    /**
     * Inject hashing provider
     */
    private readonly hashingProvider: HashingProvider,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    // find if the user already exist with the same email
    let existingUser: Users | undefined = undefined;
    try {
      existingUser = await this.userRepo.findOneBy({
        email: createUserDto.email,
      });
    } catch (error) {
      throw new RequestTimeoutException(TIMEOUT_MESSAGE);
    }
    if (existingUser) {
      throw new BadRequestException(USER_ALREADY_EXIST);
    }
    // if not then create a new user
    const user = this.userRepo.create(createUserDto);
    try {
      // hash the password
      user.password = await this.hashingProvider.hashPassword(
        createUserDto.password,
      );
      // save the user in the database
      return await this.userRepo.save(user);
    } catch (error) {
      throw new RequestTimeoutException(TIMEOUT_MESSAGE);
    }
  }
}

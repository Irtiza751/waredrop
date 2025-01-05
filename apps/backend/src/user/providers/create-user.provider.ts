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
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
      );
    }
    if (existingUser) {
      throw new BadRequestException('User already exist with this email');
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
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
      );
    }
  }
}

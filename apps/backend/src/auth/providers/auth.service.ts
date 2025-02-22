import {
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/providers/user.service';
import { LoginDto } from '../dtos/login.dto';
import { USER_NOT_EXIST } from 'src/constants/error.messages';
import { HashingProvider } from './hashing.provider';
import { Users } from 'src/user/user.entity';
import { JwtProvider } from './jwt-provider';

@Injectable()
export class AuthService {
  constructor(
    /**
     * Injecting user service
     */
    private readonly userService: UserService,
    /**
     * Inject hashing provider
     */
    private readonly hashingProvider: HashingProvider,
    /**
     * Inject jwt provider
     */
    private readonly jwtProvider: JwtProvider,
  ) {}

  async login(loginDto: LoginDto) {
    let user: Users | undefined = undefined;

    try {
      user = await this.userService.findUserByEmail(loginDto.email);
    } catch (error) {
      throw new NotFoundException(USER_NOT_EXIST);
    }

    if (!user) {
      throw new NotFoundException(USER_NOT_EXIST);
    }

    const validPassword = await this.hashingProvider.comparePassword(
      loginDto.password,
      user.password,
    );

    Logger.debug('Valid password', validPassword);

    if (!validPassword) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const accessToken = await this.jwtProvider.accessToken({
      sub: user.id,
      email: user.email,
    });

    const refreshToken = await this.jwtProvider.accessToken({
      sub: user.id,
      email: user.email,
    });

    return { user, refreshToken, accessToken };
  }

  getSignedInUser(id: number) {
    return this.userService.findUserById(id);
  }
}

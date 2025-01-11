import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtProvider } from '../providers/jwt-provider';
import { Reflector } from '@nestjs/core';
import { AUTH_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    /**
     * Inject jwt provider
     */
    private readonly jwtProvider: JwtProvider,
    /**
     * Inject reflector
     */
    private readonly reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const isPublic = this.reflector.getAllAndOverride(AUTH_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    Logger.log('Is public: ', { isPublic });
    if (isPublic) {
      return true;
    }

    const token = this.extractToken(request);

    Logger.log('Token: ', { token });

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtProvider.verifyToken(token);
      Logger.log('Payload: ', { payload });
    } catch (error) {
      Logger.error('Error: ', { error });
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }

  private extractToken(request: Request): string | undefined {
    const token = request.headers['authorization']?.split(' ')[1];
    return token;
  }
}

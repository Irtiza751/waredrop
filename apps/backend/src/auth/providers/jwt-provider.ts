import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwt.config';
import { JwtUserPayload } from '../interfaces/jwt-user-payload';

/**
 * @description
 * Generate access & refresh token
 */
@Injectable()
export class JwtProvider {
  constructor(
    /**
     * Inject jwt service
     */
    private readonly jwtService: JwtService,
    /**
     * Inject jwt config
     */
    @Inject(jwtConfig.KEY)
    private readonly jwtConfigService: ConfigType<typeof jwtConfig>,
  ) {}

  public accessToken(payload: JwtUserPayload) {
    return this.jwtService.signAsync(payload, {
      secret: this.jwtConfigService.jwtAccessSecret,
      issuer: this.jwtConfigService.jwtIssuer,
      expiresIn: this.jwtConfigService.jwtAccessTtl,
    });
  }

  public refreshToken(payload: JwtUserPayload) {
    return this.jwtService.signAsync(payload, {
      secret: this.jwtConfigService.jwtRefreshSecret,
      issuer: this.jwtConfigService.jwtIssuer,
      expiresIn: this.jwtConfigService.jwtRefreshTtl,
    });
  }

  public verifyToken(token: string) {
    return this.jwtService.verifyAsync(token, {
      secret: this.jwtConfigService.secret,
    });
  }
}

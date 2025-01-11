import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { UserModule } from 'src/user/user.module';
import { HashingProvider } from './providers/hashing.provider';
import { ArgonProvider } from './providers/argon.provider';
import { JwtModule } from '@nestjs/jwt';
import { JwtProvider } from './providers/jwt-provider';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
// jwt config
import jwtConfig from 'src/config/jwt.config';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: HashingProvider,
      useClass: ArgonProvider,
    },
    { provide: APP_GUARD, useClass: AuthGuard },
    JwtProvider,
  ],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  exports: [HashingProvider],
})
export class AuthModule {}

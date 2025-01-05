import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { UserModule } from 'src/user/user.module';
import { HashingProvider } from './providers/hashing.provider';
import { ArgonProvider } from './providers/argon.provider';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: HashingProvider,
      useClass: ArgonProvider,
    },
  ],
  imports: [forwardRef(() => UserModule)],
  exports: [HashingProvider],
})
export class AuthModule {}

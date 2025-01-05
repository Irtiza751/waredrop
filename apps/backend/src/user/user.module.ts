import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './providers/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { CreateUserProvider } from './providers/create-user.provider';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UserController],
  providers: [UserService, CreateUserProvider],
  imports: [TypeOrmModule.forFeature([Users]), forwardRef(() => AuthModule)],
  exports: [UserService],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './providers/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([Users])],
})
export class UserModule {}

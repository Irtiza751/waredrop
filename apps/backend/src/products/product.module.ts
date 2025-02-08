import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [ProductController],
  providers: [],
  imports: [UserModule, TypeOrmModule.forFeature([Product])],
  exports: [],
})
export class ProductModule {}

import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  controllers: [ProductController],
  providers: [],
  imports: [TypeOrmModule.forFeature([Product])],
  exports: [],
})
export class ProductModule {}

import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { UserModule } from 'src/user/user.module';
import { ProductService } from './providers/product.service';
import { CreateProductProvider } from './providers/create-product.provider';

@Module({
  controllers: [ProductController],
  providers: [ProductService, CreateProductProvider],
  imports: [UserModule, TypeOrmModule.forFeature([Product])],
  exports: [],
})
export class ProductModule {}

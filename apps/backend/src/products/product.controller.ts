import { Controller, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductController {
  constructor() {}
  @Post('/create')
  createProduct(createProductDto: CreateProductDto) {
    return { msg: 'Product created', product: createProductDto };
  }
}

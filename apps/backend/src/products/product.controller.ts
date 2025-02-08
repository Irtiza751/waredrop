import { Controller, Post, Body } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductController {
  constructor() {}
  @Post('/create')
  createProduct(@Body() createProductDto: CreateProductDto) {
    return { msg: 'Product created', product: createProductDto };
  }
}

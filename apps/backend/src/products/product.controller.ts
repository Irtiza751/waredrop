import { Controller, Post } from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor() {}
  @Post('/create')
  createProduct() {
    return { msg: 'Product created' };
  }
}

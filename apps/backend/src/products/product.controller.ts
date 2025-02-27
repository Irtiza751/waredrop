import { Controller, Post, Body, Request, Get } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductService } from './providers/product.service';
import { REQUEST_USER_KEY } from 'src/constants/auth.keys';
import { JwtUserPayload } from 'src/auth/interfaces/jwt-user-payload';
import { MarkPublic } from 'src/auth/decorators/public.decorator';

@Controller('products')
export class ProductController {
  constructor(
    /**
     * @description
     * Inject product service
     */
    private readonly productService: ProductService,
  ) {}

  @Post('/create')
  createProduct(
    @Body() createProductDto: CreateProductDto,
    @Request() req: any,
  ) {
    const user = req[REQUEST_USER_KEY] as JwtUserPayload;
    return this.productService.create(createProductDto, user.sub);
  }

  @MarkPublic()
  @Get()
  fetchProducts() {
    return this.productService.fetchProducts();
  }
}

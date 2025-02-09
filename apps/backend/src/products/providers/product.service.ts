import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { CreateProductProvider } from './create-product.provider';

@Injectable()
export class ProductService {
  constructor(
    /**
     * Inject create product provider
     */
    private readonly creatProductProvider: CreateProductProvider,
  ) {}

  async create(productDto: CreateProductDto, userId: number) {
    return this.creatProductProvider.createProduct({ ...productDto, userId });
  }
}

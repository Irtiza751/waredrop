import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { CreateProductProvider } from './create-product.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    /**
     * Inject product entity
     */
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    /**
     * Inject create product provider
     */
    private readonly creatProductProvider: CreateProductProvider,
  ) {}

  async create(productDto: CreateProductDto, userId: number) {
    return this.creatProductProvider.createProduct({ ...productDto, userId });
  }

  async fetchProducts() {
    return this.productRepo.find();
  }
}

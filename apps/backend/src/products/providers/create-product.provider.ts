import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/providers/user.service';
import { CreateProductDto } from '../dtos/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../product.entity';
import { Repository } from 'typeorm';

interface CreateProduct extends CreateProductDto {
  userId: number;
}

@Injectable()
export class CreateProductProvider {
  constructor(
    /**
     * Inject product entity
     */
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    /**
     * Inject user service
     */
    private readonly userService: UserService,
  ) {}

  async createProduct(productDto: CreateProduct) {
    const user = await this.userService.findUserById(productDto.userId);
    if (user.isSeller) {
      const product = this.productRepo.create(productDto);
      return this.productRepo.save({ ...product, seller: user });
    } else {
      throw new ForbiddenException(
        'You should be a seller to create a product',
      );
    }
  }
}

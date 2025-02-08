import { ProductStatus } from '../enums/product-status.enum';

export class CreateProductDto {
  title: string;
  description: string;
  price: number;
  quantity: number;
  status: ProductStatus;
}

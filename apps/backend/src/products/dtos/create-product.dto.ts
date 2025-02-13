import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  IsUrl,
} from 'class-validator';
import { ProductStatus } from '../enums/product-status.enum';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsEnum(ProductStatus)
  @IsOptional()
  status?: ProductStatus;
}

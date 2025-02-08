export class CreateProductDto {
  name: string; // name of the product
  createdBy: number; // id of the user who created this product
  image: string; // image url string
  description: string; // product description
  price: number;
  discount: number;
  quantity: number;
  status: string; // in stock or out of stock;
  rating: number;
  sizes: string[]; // xl, lg, or xxl
  colors: string[];
}

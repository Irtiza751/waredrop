import Product from "./product";
import { Product as IProduct } from "@/types/product-interface";

export default async function ProductList({
  data,
  cols = 4,
}: {
  data: IProduct[];
  cols?: number;
}) {
  return (
    <div
      className={`grid lg:grid-cols-[${cols}] md:grid-cols-3 grid-cols-2 gap-4`}
    >
      {data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

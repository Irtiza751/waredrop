import { utils } from "@waredrop/ui/core";
import Product from "./product";
import { Product as IProduct } from "@/types/product-interface";

export default async function ProductList({
  data,
  className,
}: {
  data: IProduct[];
  className?: string;
}) {
  return (
    <div
      className={utils.cn(
        "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4",
        className
      )}
    >
      {data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

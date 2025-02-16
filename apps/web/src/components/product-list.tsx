import { waredropApi } from "@/api/waredrop.api";
import Product from "./product";
import { Product as IProduct } from "@/types/product-interface";

export default async function ProductList() {
  const { data } = await waredropApi.get<IProduct[]>("/products");

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
      {data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

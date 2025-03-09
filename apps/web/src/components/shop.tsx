import ShopHeader from "@/components/shop-header";
import ProductList from "./product-list";
import { waredropApi } from "@/api/waredrop.api";
import { Product as IProduct } from "@/types/product-interface";
import Filter from "./filter";

export default async function Shop({
  params,
}: {
  params?: { category: string };
}) {
  const { data } = await waredropApi.get<IProduct[]>("/products");

  return (
    <>
      <ShopHeader title={params?.category} />
      <div className="grid grid-cols-8 gap-2 relative items-start">
        <div className="sticky top-5 col-span-2">
          <Filter />
        </div>
        <div className="col-span-6">
          <ProductList data={data} cols={3} />
        </div>
      </div>
    </>
  );
}

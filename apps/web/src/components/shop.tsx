import ShopHeader from "@/components/shop-header";
import ProductList from "./product-list";
import { Card, CardHeader } from "@waredrop/ui";
import { waredropApi } from "@/api/waredrop.api";
import { Product as IProduct } from "@/types/product-interface";
import { notFound } from "next/navigation";

export default async function Shop({
  params,
}: {
  params?: { category: string };
}) {
  const { data } = await waredropApi.get<IProduct[]>("/products");

  if (!data) {
    return notFound();
  }

  return (
    <>
      <ShopHeader title={params?.category} />
      <div className="grid grid-cols-5 gap-2 relative items-start">
        <div className="sticky top-5">
          <Card>
            <CardHeader>
              <h4>Filters</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="col-span-4">
          <ProductList data={data} />
        </div>
      </div>
    </>
  );
}

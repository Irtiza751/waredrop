import ShopHeader from "@/components/shop-header";
import ProductList from "./product-list";
import { Card, CardHeader } from "@waredrop/ui";

export default function Shop({ params }: { params?: { category: string } }) {
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
          <ProductList />
        </div>
      </div>
    </>
  );
}

import Product from "@/components/product";
import ShopHeader from "@/components/shop-header";
import makeArray from "@/utils/make-array";

export default function Shop({ params }: { params?: { category: string } }) {
  return (
    <>
      <ShopHeader title={params?.category} />
      <div className="grid grid-cols-4 gap-5">
        {makeArray(12).map((_, key) => (
          <Product key={key} />
        ))}
      </div>
    </>
  );
}

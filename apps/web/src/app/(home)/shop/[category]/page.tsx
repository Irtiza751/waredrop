import Product from "@/components/product";
import ShopHeader from "@/components/shop-header";

const products = new Array(12).fill(0);

export default function page({ params }: { params: { category: string } }) {
  return (
    <>
      <ShopHeader title={params.category} />
      <div className="grid grid-cols-4 gap-5">
        {products.map((_, key) => (
          <Product key={key} />
        ))}
      </div>
    </>
  );
}

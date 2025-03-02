// import Image from "next/image";
import { Button } from "@waredrop/ui";
// import summer from "@/assets/images/summer.jpg";
// import winter from "@/assets/images/winter.jpg";
import Link from "next/link";
import { waredropApi } from "@/api/waredrop.api";
import { Product as IProduct } from "@/types/product-interface";
import ProductList from "@/components/product-list";

export default async function Home() {
  const { data } = await waredropApi.get<IProduct[]>("/products");

  return (
    <div>
      <section>
        <div className="container">
          <h3 className="text-center lg:text-4xl text-3xl mb-5 mt-16 max-w-lg mx-auto">
            Fresh arrivals and new selections
          </h3>
        </div>
        <div className="container">
          <ProductList data={data} />
        </div>

        <div className="flex justify-center mt-4">
          <Button asChild size="lg">
            <Link href="/shop">Browse All collections</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

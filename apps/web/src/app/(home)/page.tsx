import { Button } from "@waredrop/ui";
import summer from "@/assets/images/summer.jpg";
import winter from "@/assets/images/winter.jpg";
import Link from "next/link";
import { waredropApi } from "@/api/waredrop.api";
import { Product as IProduct } from "@/types/product-interface";
import ProductList from "@/components/product-list";
import Image from "next/image";

export default async function Home() {
  const { data } = await waredropApi.get<IProduct[]>("/products");

  return (
    <div>
      <section className="container flex items-center gap-2 mt-12">
        <div className="flex-1">
          <h2 className="max-w-2xl text-6xl font-semibold tracking-tight">
            Seamless shopping for stylish looks that don&apos;t break the bank.
          </h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <Image
            src={summer}
            alt="Two each of gray, white, and black shirts laying flat."
            className="block rounded-xl"
          />
          <Image
            src={winter}
            alt="Two each of gray, white, and black shirts laying flat."
            className="block rounded-xl mt-8"
          />
        </div>
      </section>

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

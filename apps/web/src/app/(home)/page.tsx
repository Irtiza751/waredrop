import Image from "next/image";
import { Button } from "@waredrop/ui";
import summer from "@/assets/images/summer.jpg";
import winter from "@/assets/images/winter.jpg";
import Link from "next/link";
import { waredropApi } from "@/api/waredrop.api";
import { Product as IProduct } from "@/types/product-interface";
import ProductList from "@/components/product-list";
import { notFound } from "next/navigation";

export default async function Home() {
  const { data } = await waredropApi.get<IProduct[]>("/products");

  if (!data) {
    return notFound();
  }

  return (
    <div>
      {/* hero section */}
      <section className="h-96 container bg-stone-100 rounded-lg mt-5">
        <div className="relative h-full flex items-center justify-center pb-10">
          <h2 className="lg:text-5xl md:text-4xl text-3xl max-w-4xl font-semibold text-center leading-normal text-black">
            Seamless shopping for stylish looks that don&apos;t break the bank.
          </h2>
        </div>
      </section>

      <section>
        <div className="container">
          <h3 className="text-center lg:text-4xl text-3xl mb-5 mt-16 max-w-lg mx-auto">
            Fresh arrivals and new selections
          </h3>
        </div>

        <ProductList data={data} />

        <div className="flex justify-center mt-4">
          <Button asChild size="lg">
            <Link href="/shop">Browse All collections</Link>
          </Button>
        </div>
      </section>

      <section className="container grid lg:grid-cols-2 md:grid-cols-2 lg:gap-0 md:gap-0 gap-2 my-5">
        <div className="relative text-center h-[600px] bg-stone-500 flex items-center justify-center">
          <span className="absolute inset-0 bg-black/25 z-[1]" />
          <Image
            alt="summer"
            src={winter}
            fill
            className="object-cover object-center"
          />
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="uppercase relative z-[2]"
          >
            <Link href="/shop/winter-collection">winter collection</Link>
          </Button>
        </div>
        <div className="relative text-center h-[600px] bg-stone-500 flex items-center justify-center">
          <span className="absolute inset-0 bg-black/25 z-[1]" />
          <Image
            alt="summer"
            src={summer}
            fill
            className="object-cover object-center"
          />
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="uppercase relative z-[2]"
          >
            <Link href="/shop/summer-collection">summer collection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

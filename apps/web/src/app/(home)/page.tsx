import Image from "next/image";
import { Button } from "@waredrop/ui";
import Product from "@/components/product";

import summer from "@/assets/images/summer.jpg";
import winter from "@/assets/images/winter.jpg";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <section className="h-96 container bg-stone-100 rounded-lg mt-5">
        <div className="relative h-full flex items-center justify-center pb-10">
          <h2 className="text-5xl max-w-4xl font-semibold text-center leading-normal text-black">
            Seamless shopping for stylish looks that don&apos;t break the bank.
          </h2>
        </div>
      </section>

      <section>
        <div className="container">
          <h3 className="text-center text-4xl mb-5 mt-16 max-w-lg mx-auto">
            Fresh arrivals and new selections
          </h3>
        </div>

        <div className="grid grid-cols-4 gap-4 container mb-5">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="flex justify-center">
          <Button size="lg">Browse All collections</Button>
        </div>
      </section>

      <section className="container grid grid-cols-2 my-5">
        <div className="relative text-center h-[600px] bg-stone-500 flex items-center justify-center">
          <span className="absolute inset-0 bg-black/25 z-[1]" />
          <Image
            alt="summer"
            src={winter}
            fill
            className="object-cover object-center"
          />
          <Button
            size="lg"
            variant="secondary"
            className="uppercase relative z-[2]"
          >
            winter collection
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
            size="lg"
            variant="secondary"
            className="uppercase relative z-[2]"
          >
            summer collection
          </Button>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@waredrop/ui";

import hoodie from "@/assets/images/pord-img.png";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <section className="h-96 container bg-gradient-to-r from-blue-800 to-cyan-500 rounded-xl mt-5">
        <div className="relative text-white h-full flex items-center justify-center pb-10">
          <h2 className="text-5xl max-w-4xl font-semibold text-center text-blue-100 leading-normal">
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
          <figure className="bg-slate-100 p-4 rounded-lg outline outline-1 outline-slate-200 space-y-2">
            <Link href="/">
              <Image
                alt="Hoodie"
                src={hoodie}
                className="aspect-square object-cover"
              />
            </Link>
            <figcaption>
              <Button size="sm">Add to cart</Button>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

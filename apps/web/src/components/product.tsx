import Image from "next/image";
import Link from "next/link";

import { Product as IProduct } from "@/types/product-interface";

// interface Props extends IProduct {}

export default function Product({ image, price, title }: IProduct) {
  const { format } = Intl.NumberFormat("en", {
    currency: "USD",
    style: "currency",
  });

  return (
    <figure className="group p-2 rounded-lg space-y-3 relative">
      <Link
        href="/product/gray-winter-hoodie"
        className="block flex justify-center bg-stone-50 rounded-lg"
      >
        <Image
          alt="Hoodie"
          className="aspect-square object-contain h-96"
          src={image}
          width={438}
          height={468}
        />
      </Link>
      <figcaption className="block">
        <div className="flex justify-between text-sm">
          <div>
            <Link className="" href={`/product/${title}`}>
              <span>{title}</span>
            </Link>
            <p className="text-stone-600">Black</p>
          </div>
          <h5 className="text-black font-medium">
            {format(parseFloat(price))}
          </h5>
        </div>
      </figcaption>
    </figure>
  );
}

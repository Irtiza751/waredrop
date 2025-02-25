import Image from "next/image";
import Link from "next/link";
import { Button } from "@waredrop/ui";

import { Product as IProduct } from "@/types/product-interface";

// interface Props extends IProduct {}

export default function Product({ image, price, title }: IProduct) {
  const { format } = Intl.NumberFormat("en", {
    currency: "USD",
    style: "currency",
  });

  return (
    <figure className="group bg-stone-100 px-4 pb-4 pt-2.5 rounded-lg space-y-2 relative">
      <h6 className="absolute bg-white px-2 text-center space-x-1 text-lg right-4 top-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500">
        {/* original price */}
        <span className="text-sm text-red-600">-50%</span>
        {/* discount price */}
        <span className="text-green-600">{format(parseFloat(price))}</span>
      </h6>
      <Link
        href="/product/gray-winter-hoodie"
        className="block flex justify-center"
      >
        <Image
          alt="Hoodie"
          className="aspect-square object-contain"
          src={image}
          width={438}
          height={438}
        />
      </Link>
      <figcaption className="text-center">
        <h5 className="text-sm">{title}</h5>
        <Button variant="link" className="font-semibold">
          Add to cart
        </Button>
      </figcaption>
    </figure>
  );
}

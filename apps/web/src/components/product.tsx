import Image from "next/image";
import Link from "next/link";
import { Button } from "@waredrop/ui";

import hoodie from "@/assets/images/pord-img.png";

export default function Product() {
  return (
    <figure className="group bg-stone-100 px-4 pb-4 pt-2.5 rounded-lg space-y-2 relative">
      <h6 className="absolute bg-white px-2 text-center space-x-1 text-lg right-4 top-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500">
        {/* original price */}
        <span className="text-sm text-red-600">-50%</span>
        {/* discount price */}
        <span className="text-green-600">$200</span>
      </h6>
      <Link
        href="/product/gray-winter-hoodie"
        className="block flex justify-center"
      >
        <Image
          alt="Hoodie"
          className="aspect-square object-contain"
          src={hoodie}
        />
      </Link>
      <figcaption className="text-center">
        <h5 className="text-sm">Gray winter hoodie</h5>
        <Button variant="link" className="font-semibold">
          Add to cart
        </Button>
      </figcaption>
    </figure>
  );
}

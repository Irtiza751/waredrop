import Image from "next/image";
import hoodie from "@/assets/images/pord-img.png";
import parseSlug from "@/utils/parse-slug";
import { Button, Separator } from "@waredrop/ui";
import ProductList from "@/components/product-list";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <>
      <section className="container lg:grid md:grid grid-cols-5 gap-5 mt-5 relative items-start">
        <div className="col-span-3 grid grid-cols-5 grid-rows-3 gap-2">
          <div className="bg-stone-100 col-start-1 col-end-5 row-span-3 flex items-center justify-center">
            <Image alt="Hoodie" src={hoodie} />
          </div>
          <div className="bg-stone-100 col-start-5 flex items-center justify-center">
            <Image alt="Hoodie" src={hoodie} />
          </div>
          <div className="bg-stone-100 col-start-5 flex items-center justify-center">
            <Image alt="Hoodie" src={hoodie} />
          </div>
          <div className="bg-stone-100 col-start-5 flex items-center justify-center">
            <Image alt="Hoodie" src={hoodie} />
          </div>
        </div>
        <div className="space-y-4 col-span-2 sticky top-10">
          {/* title */}
          <h2 className="capitalize text-4xl font-semibold">
            {parseSlug(params.slug)}
          </h2>
          {/* price */}
          <div className="flex justify-between items-center">
            <h4 className="space-x-2 flex">
              <span className="text-2xl">$200</span>
              <span className="text-red-600 text-md">-50%</span>
            </h4>
            {/* rating */}
            <p className="text-2xl">4.5 Rating</p>
          </div>
          {/* sizes */}
          <div className="flex gap-4 items-center flex-wrap">
            <span className="uppercase border rounded px-4 py-2">xl</span>
            <span className="uppercase border rounded px-4 py-2">lg</span>
            <span className="uppercase border rounded px-4 py-2 bg-black text-white">
              md
            </span>
            <span className="uppercase border rounded px-4 py-2">sm</span>
          </div>
          {/* colors */}
          <div className="flex gap-4 items-center flex-wrap border-b pb-4">
            <p className="uppercase">Colors: </p>
            <span className="w-8 h-8 bg-stone-900 rounded-full ring ring-stone-200 ring-offset-2" />
            <span className="w-8 h-8 bg-stone-400 rounded-full ring ring-stone-200 ring-offset-2" />
          </div>
          <Button size="lg" className="w-full uppercase">
            Add to cart
          </Button>
          <div className="space-y-3">
            <h4 className="text-xl text-semibold">Description:</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic culpa
              in exercitationem temporibus officiis sequi voluptatem velit modi
              maiores. Repellat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum
              nemo harum vero tenetur fugiat delectus voluptatum architecto
              nesciunt sit laudantium, illo eligendi optio. Molestias assumenda
              esse deserunt minus laborum.
            </p>
          </div>
        </div>
      </section>
      {/* related products */}
      <section className="container mt-8">
        <h2 className="text-3xl text-center font-bold">Related Products</h2>
        <Separator className="my-5" />
        <ProductList size={4} />
      </section>
    </>
  );
}

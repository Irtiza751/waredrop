import Product from "@/components/product";

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
      </section>
    </div>
  );
}

import Image from "next/image";
import banner from "@/assets/images/banner.jpg";
import hoodie from "@/assets/images/pord-img.png";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <section className="h-96 relative">
        <Image
          alt="Hero Image"
          src={banner}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <span className="absolute inset-0 bg-slate-950/25" />
        <div className="container relative text-white h-full flex items-end pb-10">
          <h2 className="text-5xl max-w-4xl">
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

        <div className="grid grid-cols-5 gap-4 container mb-5">
          <figure>
            <Image alt="Hoodie" src={hoodie} className="bg-slate-100" />
            <figcaption>Fall gray hoodie</figcaption>
          </figure>
          <figure>
            <Image alt="Hoodie" src={hoodie} className="bg-slate-100" />
            <figcaption>Fall gray hoodie</figcaption>
          </figure>
          <figure>
            <Image alt="Hoodie" src={hoodie} className="bg-slate-100" />
            <figcaption>Fall gray hoodie</figcaption>
          </figure>
          <figure>
            <Image alt="Hoodie" src={hoodie} className="bg-slate-100" />
            <figcaption>Fall gray hoodie</figcaption>
          </figure>
          <figure>
            <Image alt="Hoodie" src={hoodie} className="bg-slate-100" />
            <figcaption>Fall gray hoodie</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

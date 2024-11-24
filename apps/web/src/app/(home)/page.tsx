import Image from "next/image";
import heroImage from "@/assets/images/hero.jpg";
import { Button } from "@waredrop/ui";
import { getSeason } from "@waredrop/utils";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <section className="relative grid grid-cols-2 h-svh">
        <div className="self-center text-center text-blue-900">
          <h3 className="text-4xl font-semibold">Sale up to 50% off!</h3>
          <h2 className="text-6xl font-bold mb-4">
            {getSeason(new Date().getMonth())} Sale Collections
          </h2>
          <Button size="lg">Shop Now</Button>
        </div>
        <div className="relative">
          <Image
            alt="Hero Image"
            src={heroImage}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </section>
      {/* quote section */}
      <section></section>
    </div>
  );
}

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Button } from "@waredrop/ui";
import Link from "next/link";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { getSeason } from "@waredrop/utils";

const routes = [
  {
    href: "",
    name: "Home",
  },
  {
    href: "",
    name: "Shop",
  },
  {
    href: "",
    name: "New Arrivals",
  },
  {
    href: "",
    name: "About Us",
  },
];

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-black py-1">
        <p className="text-center text-white uppercase text-sm">
          Get up to 50% of on our {getSeason(new Date().getMonth())} collection
          Sale
        </p>
      </div>
      <header className="bg-stone-50">
        <nav className="container py-4 flex items-center">
          <ul className="flex-1 flex gap-10">
            {routes.map((route, i) => {
              return (
                <li key={i}>
                  <Link href={route.href}>{route.name}</Link>
                </li>
              );
            })}
          </ul>

          <div className="flex-1 flex justify-center">
            <Image src={logo} alt="Waredrop" priority width={170} />
          </div>

          <div className="flex-1 space-x-2 flex items-center justify-end">
            <Button size="icon" variant="link">
              <FiSearch size={20} />
            </Button>
            <Button size="icon" variant="link">
              <FiShoppingBag size={20} />
            </Button>
            <Button asChild variant="link">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="min-h-screen">{children}</main>
    </>
  );
}

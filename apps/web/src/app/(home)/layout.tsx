import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Button, Separator } from "@waredrop/ui";
import Link from "next/link";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { getSeason } from "@waredrop/utils";

const routes = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/shop",
    name: "Shop",
  },
  {
    href: "/shop/new-arrivals",
    name: "New Arrivals",
  },
  {
    href: "/about-us",
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
          Get up to 50% of on our {getSeason(new Date().getMonth() + 1)}{" "}
          collection Sale
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
            <Link href="/">
              <Image src={logo} alt="Waredrop" priority width={170} />
            </Link>
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
      <footer className="bg-stone-100">
        <div className="flex justify-center py-5 mt-4">
          <Image src={logo} alt="Waredrop" priority width={170} />
        </div>
        <Separator />
        <div className="flex justify-center">
          <ul className="flex gap-10 my-4">
            {routes.map((route, i) => {
              return (
                <li key={i}>
                  <Link href={route.href}>{route.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="bg-black text-center text-white py-2">
          &copy; Copyright 2024, all rights reserved
        </p>
      </footer>
    </>
  );
}

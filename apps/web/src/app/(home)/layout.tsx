import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Separator } from "@waredrop/ui";
import Link from "next/link";
import { getSeason } from "@waredrop/utils";
import { routes } from "@/constants/routes";
import Navbar from "@/components/navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {/* main body */}
      <main className="min-h-screen">{children}</main>
      {/* footer */}
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

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Button } from "@waredrop/ui";
import Link from "next/link";

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
      <header className="bg-white">
        <nav className="container py-4 flex items-center">
          <div className="">
            <Image src={logo} alt="Waredrop" priority width={170} />
          </div>

          <ul className="flex-1 flex gap-10 justify-center">
            {routes.map((route, i) => {
              return (
                <li key={i}>
                  <Link href={route.href}>{route.name}</Link>
                </li>
              );
            })}
          </ul>

          <div className="space-x-2">
            <Button asChild variant="secondary">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="min-h-screen">{children}</main>
    </>
  );
}

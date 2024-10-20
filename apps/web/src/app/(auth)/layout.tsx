import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { Button } from "@waredrop/ui";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <header className="py-3">
        <nav className="container flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="Waredrop" priority width={170} />
          </Link>
          <Button asChild variant="secondary">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </nav>
      </header>
      <div className="container grid place-items-center min-h-[calc(100vh-60px)]">
        {children}
      </div>
    </main>
  );
}

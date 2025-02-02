"use client";

import { FiShoppingBag, FiSearch } from "react-icons/fi";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@waredrop/ui";
import { routes } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import useAuthStore from "@/store/auth-store";

export default function Navbar() {
  const user = useAuthStore((store) => store.user);

  console.log(user);

  return (
    <header className="bg-stone-50">
      <nav className="container py-4 flex items-center">
        <ul className="flex-1 xl:flex hidden gap-10">
          {routes.map((route, i) => {
            return (
              <li key={i}>
                <Link href={route.href}>{route.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className="flex-1 flex xl:justify-center">
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

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/Irtiza751.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="link">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

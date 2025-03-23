"use client";
import { usePathname } from "next/navigation";
import breadcrumbs from "@/utils/breadcrumbs";
import Link from "next/link";
import React from "react";

export default function ShopHeader({ title }: { title?: string }) {
  const path = usePathname();

  return (
    <section className="h-56 container bg-stone-100 rounded-lg my-5">
      <div className="relative h-full flex flex-col items-center justify-center pb-10">
        <h2 className="text-5xl max-w-4xl font-semibold text-center leading-normal text-black uppercase">
          {title?.replace("-", " ") || "Shop Page"}
        </h2>
        <ul className="capitalize flex gap-2">
          {breadcrumbs(path).map((crumb) => (
            <React.Fragment key={crumb.name}>
              <li className="flex gap-1 hover:underline hover:text-blue-700">
                <Link href={crumb.href}>{crumb.name}</Link>
              </li>
              {!crumb.last ? <span className="text-stone-400">/</span> : null}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}

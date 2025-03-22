"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminSidebarProps {
  links: { name: string; href: string }[];
}

export default function AdminSidebar({ links }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="col-span-1 mr-2">
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li
            key={link.name}
            className={`hover:bg-stone-50 rounded-lg ${pathname === link.href ? "bg-stone-100" : ""}`}
          >
            <Link className="px-3 py-2 block" href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

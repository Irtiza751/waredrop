import AdminSidebar from "@/components/admin-sidebar";

const links = [
  {
    name: "Overview",
    href: "/admin",
  },
  {
    name: "Products",
    href: "/admin/products",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container grid grid-cols-5 mt-5">
      <AdminSidebar links={links} />
      <div className="col-span-4 border-l pl-2">{children}</div>
    </div>
  );
}

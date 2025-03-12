export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-8 mt-5">
      <aside className="col-span-2"></aside>
      <div className="col-span-6">{children}</div>
    </div>
  );
}

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex gap-x-4 h-screen mt-5">
      <aside className="basis-96 shrink grow-0 border-r px-2">
        <h3 className="text-lg font-bold mb-2">Account Settings</h3>
        <p>Use a permanent address where you can receive mail.</p>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}

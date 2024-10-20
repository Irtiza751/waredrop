import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-x-2 mt-2 container">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Distructive</Button>
      <Button variant="outline">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

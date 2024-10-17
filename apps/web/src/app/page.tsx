import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <div className="space-x-2 mt-2 container">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Distructive</Button>
      <Button variant="outline">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <div className="my-2">
        <Image src={logo} alt="Waredrop" priority width={170} />
      </div>
    </div>
  );
}

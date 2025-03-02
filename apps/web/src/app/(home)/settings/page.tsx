"use client";
import { Button, Input, Label, Switch } from "@waredrop/ui";
import Image from "next/image";

const image =
  "https://res.cloudinary.com/fomo-djbhpg8sh/image/upload/v1740250628/picture_n6t8t8.jpg";

export default function Settings() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          height={100}
          width={100}
          alt="profile"
          className="rounded-lg"
        />
        <div className="space-y-2">
          <Button>Upload Image</Button>
          <small className="block">JPG, GIF or PNG. 1MB max.</small>
        </div>
      </div>
      <form className="mt-5 space-y-4">
        <div className="flex items-center gap-2">
          <Switch id="seller" name="is_seller" />
          <Label htmlFor="seller">Seller</Label>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="John doe" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="john@example.com" />
          </div>
        </div>
      </form>
    </div>
  );
}

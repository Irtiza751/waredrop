// "use client";
import { Button, Input, Label, Separator, Switch } from "@waredrop/ui";
import { RadioGroupPrimitive as RadioGroup } from "@waredrop/ui/core";
import { FiCreditCard, FiTruck } from "react-icons/fi";
// import Image from "next/image";

// const image =
//   "https://res.cloudinary.com/fomo-djbhpg8sh/image/upload/v1740250628/picture_n6t8t8.jpg";

export default function Settings() {
  return (
    <form className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
      <div className="sm:col-span-6 space-y-1">
        <Label>Username</Label>
        <Input name="username" />
      </div>
      <div className="flex items-center gap-2">
        <Switch id="seller" />
        <Label htmlFor="seller">Seller mode</Label>
      </div>
      <Separator className="sm:col-span-6" />
      <h3 className="sm:col-span-6 text-lg font-semibold">
        Shipping information
      </h3>
      <div className="sm:col-span-6 space-y-1">
        <Label>Apartment, suite, etc.</Label>
        <Input name="appartment" />
      </div>
      <div className="sm:col-span-3 space-y-1">
        <Label>City</Label>
        <Input name="city" />
      </div>
      <div className="sm:col-span-3 space-y-1">
        <Label>Country</Label>
        <Input name="country" />
      </div>
      <div className="sm:col-span-3 space-y-1">
        <Label>State / Province</Label>
        <Input name="state" />
      </div>
      <div className="sm:col-span-3 space-y-1">
        <Label>Postal code</Label>
        <Input name="postal" />
      </div>
      <div className="sm:col-span-3 space-y-1">
        <Label>Phone</Label>
        <Input name="phone" />
      </div>
      <div className="sm:col-span-3 space-y-1">
        <Label>Address</Label>
        <Input name="address" />
      </div>
      <Separator className="sm:col-span-6" />
      <h3 className="sm:col-span-6 text-lg font-semibold">Payment method</h3>
      <RadioGroup.Root
        className="sm:col-span-4 grid grid-cols-2 gap-2.5"
        defaultValue="cod"
      >
        <Label className="radio border-2 p-3 flex gap-2 rounded-md transition-colors">
          <RadioGroup.Item value="cod" id="cod" className="peer hidden">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <FiTruck size={16} className="w-8" />
          <div className="space-y-2">
            <p>Cash on delivery</p>
            <small className="block text-gray-600">
              Pay with cash when your order arrives
            </small>
          </div>
        </Label>

        <Label className="radio border-2 p-3 flex gap-2 rounded-md transition-colors">
          <RadioGroup.Item value="bt" id="bt" className="peer hidden">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <FiCreditCard size={16} className="w-8" />
          <div className="space-y-2">
            <p>Online transfer</p>
            <small className="block text-gray-600">
              Securely transfer funds from your bank
            </small>
          </div>
        </Label>
      </RadioGroup.Root>

      <Separator className="sm:col-span-6" />
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </form>
  );
}

import { Input, Label, Textarea } from "@waredrop/ui";
import Image from "next/image";

const image = "https://fakeimg.pl/200x200?text=Image&font=bebas";

export default function Admin() {
  return (
    <div className="container">
      <Image src={image} height={200} width={200} alt="product image" />
      <form className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Black lather jacket" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="price">Price</Label>
          <Input id="price" name="price" placeholder="$120" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="quantity">Quantity</Label>
          <Input id="quantity" name="quantity" placeholder="50" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Lorem ipsum door site..."
          />
        </div>
      </form>
    </div>
  );
}

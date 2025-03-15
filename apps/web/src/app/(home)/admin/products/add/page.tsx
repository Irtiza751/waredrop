import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@waredrop/ui";

export default function Add() {
  return (
    <div className="grid grid-cols-5 gap-2 items-start relative">
      <div className="col-span-3 space-y-4">
        <Card className="rounded-lg shadow-none">
          <CardHeader className="border-b">
            <CardTitle>Product Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-2 gap-2">
              <div className="col-span-2 space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Shirt, T-Shirt, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" placeholder="GTR-123122" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight</Label>
                <Input id="weight" placeholder="0.0 kg" />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 sticky top-2">
        <Card className="rounded-lg shadow-none">
          <CardHeader className="border-b">
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-2">
              <div className="col-span-2 space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" placeholder="$0.00" />
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="mt-4 flex gap-2 justify-end">
          <Button variant="outline">Cancel</Button>
          <Button>Create</Button>
        </div>
      </div>
    </div>
  );
}

import Editor from "@/components/editor";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
  Switch,
} from "@waredrop/ui";
import Link from "next/link";

export default function Add() {
  return (
    <div className="grid grid-cols-5 gap-2 items-start relative">
      <div className="col-span-3 space-y-4">
        <Card className="rounded-lg shadow-none">
          <CardHeader className="border-b mb-2">
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
              <div className="col-span-2 space-y-2">
                <Label>Description</Label>
                <Editor />
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="rounded-lg shadow-none">
          <CardHeader className="border-b mb-4">
            <CardTitle>Media</CardTitle>
          </CardHeader>
          <CardContent>
            <input id="images" type="file" hidden multiple />
            <label
              htmlFor="images"
              className="flex items-center justify-center cursor-pointer block min-h-52 border-2 border-dashed rounded-md"
            >
              <Button asChild variant="secondary">
                <Label htmlFor="images">Upload</Label>
              </Button>
            </label>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 space-y-4 sticky top-2">
        <Card className="rounded-lg shadow-none">
          <CardHeader className="border-b mb-2">
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-2">
              <div className="col-span-2 space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" placeholder="$0.00" />
              </div>
              <Separator className="sm:col-span-2 my-4" />
              <div className="sm:col-span-2 flex items-centergap-2">
                <Label htmlFor="available" className="flex-1">
                  Availability
                </Label>
                <Switch id="available" />
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="mt-4 flex gap-2 justify-end">
          <Button asChild size="lg" variant="outline">
            <Link href="/admin/products">Cancel</Link>
          </Button>
          <Button size="lg">Create</Button>
        </div>
      </div>
    </div>
  );
}

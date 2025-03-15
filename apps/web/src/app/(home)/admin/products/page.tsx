import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@waredrop/ui";
import Link from "next/link";

import { FiPlusCircle, FiMoreVertical, FiFilter } from "react-icons/fi";
import { data } from "./columns";

export default function Products() {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">Products</h3>
          <p className="text-stone-700">
            Effortlessly manage your all your products & track sales performance
          </p>
        </div>
        <Button asChild className="gap-x-1">
          <Link href="/admin/products/add">
            <FiPlusCircle size={18} />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-4 my-4">
        <Input placeholder="Search products..." />
        <Button variant="outline" className="gap-x-1">
          <FiFilter size={16} /> Filters
        </Button>
      </div>
      <Table className="border">
        <TableCaption>A list of all your products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Date</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.sku}>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.sku}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.stock}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline">
                      <FiMoreVertical size={18} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

// import { ColumnDef } from "@tanstack/react-table";

export interface ProductRow {
  product: string;
  sku: string;
  price: number;
  stock: string;
  date: string;
}

export const data: ProductRow[] = [
  {
    product: "Large Black T-Shirt",
    sku: "large-black-t-shirt",
    price: 200,
    date: new Date().toLocaleDateString(),
    stock: "Out of stock",
  },
  {
    product: "Large Black T-Shirt",
    sku: "large-black-t-shirt",
    price: 200,
    date: new Date().toLocaleDateString(),
    stock: "In-Stock",
  },
  {
    product: "Large Black T-Shirt",
    sku: "large-black-t-shirt",
    price: 200,
    date: new Date().toLocaleDateString(),
    stock: "In-Stock",
  },
  {
    product: "Large Black T-Shirt",
    sku: "large-black-t-shirt",
    price: 200,
    date: new Date().toLocaleDateString(),
    stock: "In-Stock",
  },
  {
    product: "Large Black T-Shirt",
    sku: "large-black-t-shirt",
    price: 200,
    date: new Date().toLocaleDateString(),
    stock: "In-Stock",
  },
];

// export const columns: ColumnDef<ProductRow>[] = []

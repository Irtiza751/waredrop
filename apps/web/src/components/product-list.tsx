import React from "react";
import Product from "./product";

const products = new Array(12).fill(0);

export default function ProductList() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {products.map((_, key) => (
        <Product key={key} />
      ))}
    </div>
  );
}

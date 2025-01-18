import React from "react";
import Product from "./product";
import makeArray from "@/utils/make-array";

export default function ProductList() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
      {makeArray(12).map((_, key) => (
        <Product key={key} />
      ))}
    </div>
  );
}

import React from "react";
import Product from "./product";
import makeArray from "@/utils/make-array";

export default function ProductList() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {makeArray(12).map((_, key) => (
        <Product key={key} />
      ))}
    </div>
  );
}

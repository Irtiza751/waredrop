"use client";

import useAuthStore from "@/store/auth-store";
import Product from "./product";
import makeArray from "@/utils/make-array";

export default function ProductList() {
  const user = useAuthStore((store) => store.user);

  console.log("user data", user);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
      {makeArray(12).map((_, key) => (
        <Product key={key} />
      ))}
    </div>
  );
}

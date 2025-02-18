// import { useAuthToken } from "@/providers/auth-provider";
// import useAuthStore from "@/store/auth-store";
import Product from "./product";
import makeArray from "@/utils/make-array";

export default function ProductList({ size = 12 }: { size?: number }) {
  // const user = useAuthStore((store) => store.user);
  // const session = useAuthToken();
  // console.log({ session });
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
      {makeArray(size).map((_, key) => (
        <Product key={key} />
      ))}
    </div>
  );
}

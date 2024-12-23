import breadcrumbs from "@/utils/breadcrumbs";
import { headers } from "next/headers";

export default function ShopHeader({ title }: { title?: string }) {
  const headerList = headers();
  const url =
    headerList.get("x-forwarded-url") || headerList.get("referer") || "";
  const path = new URL(url).pathname;

  console.log({ url, path });

  return (
    <section className="h-56 container bg-stone-100 rounded-lg my-5">
      <div className="relative h-full flex flex-col items-center justify-center pb-10">
        <h2 className="text-5xl max-w-4xl font-semibold text-center leading-normal text-black uppercase">
          {title?.replace("-", " ") || "Shop Page"}
        </h2>
        <p className="capitalize">{breadcrumbs(path || "") ?? "Home / Shop"}</p>
      </div>
    </section>
  );
}

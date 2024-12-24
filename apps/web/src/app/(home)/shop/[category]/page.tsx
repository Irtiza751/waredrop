import Shop from "@/components/shop";

export default function page({ params }: { params: { category: string } }) {
  return <Shop params={params} />;
}

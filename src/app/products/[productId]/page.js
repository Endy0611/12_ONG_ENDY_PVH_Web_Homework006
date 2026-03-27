import CardByIdComponent from "@/components/CardByIdComponent";

export default async function ProductDetailPage({ params }) {
  const { productId } = await params;

  const res = await fetch(`https://homework-api.noevchanmakara.site/api/v1/products/${productId}`,
    { 
      cache: "no-store" 
    }
  );

  const json = await res.json();
  const product = json.payload;

  return (
    <CardByIdComponent product={product} />
  );
}
import ProductCardComponent from "@/components/ProductCardComponent";



export default async function ProductsPage() {
  const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/products");
  const data = await res.json();
  const products = data.payload;

  return (
    <main className="flex flex-wrap gap-6 justify-center p-10">
      {products.map((product) => (
        <ProductCardComponent key = {product.id} product = {product} />
      ))}
    </main>
  );
}
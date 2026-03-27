import ProductList from "@/components/ProductList"; // Adjust path based on your folders

export default async function ProductsPage() {
  const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/products");
  const data = await res.json();
  const products = data.payload;

  return (
    <main className="p-10">
      <ProductList initialProducts={products} />
    </main>
  );
}
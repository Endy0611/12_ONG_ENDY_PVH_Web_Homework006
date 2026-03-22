import CustomerHomepageCardComponent from "@/components/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "@/components/ProductHomepageCardComponent";

export default async function Home() {
  const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/customers")
  const data = await res.json()
  const customer = data.payload

  return (
    <div className="flex justify-center align-center m-auto items-center gap-5 min-h-screen">
      <ProductHomepageCardComponent/>
      <CustomerHomepageCardComponent customers={customer.length}/>
    </div>
  );
}
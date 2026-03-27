import CustomerTableComponent from "@/components/CustomerTableComponent";

const page = async () => {
  const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/customers", {
    cache: "no-store",
  });
  const data = await res.json();
  const customers = data.payload || [];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <CustomerTableComponent initialCustomers={customers} />
    </div>
  );
};

export default page;
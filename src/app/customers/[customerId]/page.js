import CustomerProfileComponent from "@/components/CustomerProfileComponent";

const page = async ({ params }) => {
  const res = await fetch(`https://homework-api.noevchanmakara.site/api/v1/customers/${params.customerId}`);
  const data = await res.json();

  return <CustomerProfileComponent customer={data.payload} />;
};

export default page;
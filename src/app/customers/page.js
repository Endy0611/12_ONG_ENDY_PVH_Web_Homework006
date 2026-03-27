import CustomerTableComponent from "@/components/CustomerTableComponent";

const page = async () => {
  const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/customers");
  const data = await res.json();
  const customer = data.payload

  return (
    <CustomerTableComponent customers={customer} />
  );
};

export default page;
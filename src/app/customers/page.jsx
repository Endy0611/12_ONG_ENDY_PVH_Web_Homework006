import CustomerTableComponent from "@/components/CustomerTableComponent";

const page = async () => {
  const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/customers");
  const data = await res.json();
  const customer = data.payload;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">List of All Customer</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search customers..."
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 w-56"
            />
            <svg
              className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </div>
        </div>
      <CustomerTableComponent customers={customer} />
    </div>
  );
};

export default page;
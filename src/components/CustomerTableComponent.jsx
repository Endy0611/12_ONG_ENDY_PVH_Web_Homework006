"use client"; // Required for search state
import { useState } from "react";
import { CalendarDays, Eye, Search } from "lucide-react";
import Link from "next/link";

const CustomerTableComponent = ({ initialCustomers }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCustomers = initialCustomers.filter((customer) => {
    const fullName = `${customer.firstName} ${customer.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">List of All Customer</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 shadow-sm"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="grid grid-cols-4 text-gray-500 text-sm font-bold border-b pb-3 mb-2">
          <span>Customer Name</span>
          <span>Birthdate</span>
          <span className="text-center">Amount Spent</span>
          <span className="text-right pr-4">Action</span>
        </div>
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((customer) => (
            <div
              key={customer.customerId}
              className="grid grid-cols-4 items-center py-4 border-b last:border-none hover:bg-gray-50/50 transition-colors"
            >
              <div>
                <p className="font-semibold text-gray-800">
                  {customer.firstName} {customer.lastName}
                </p>
                <p className="text-xs text-gray-400 font-mono">
                  ID: {customer.customerId.slice(0, 8)}...
                </p>
              </div>
              <div className="text-gray-600 flex items-center gap-2 text-sm">
                <CalendarDays className="h-4 w-4 text-gray-400" />
                {customer.birthDate}
              </div>
              <div className="text-center">
                <span className="text-green-600 font-bold">
                  ${customer.moneySpent.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-end">
                <Link
                  href={`/customers/${customer.customerId}`}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 px-4 py-1.5 rounded-lg hover:text-white hover:bg-gray-900 transition-all duration-200"
                >
                  <Eye className="h-4 w-4" />
                  View Profile
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <Search className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No customers found</h3>
            <p className="text-gray-500 mt-1">
              We couldn't find any results matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-blue-600 font-semibold hover:text-blue-700 underline underline-offset-4"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerTableComponent;
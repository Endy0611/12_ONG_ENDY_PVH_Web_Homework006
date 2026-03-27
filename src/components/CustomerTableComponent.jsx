import { CalendarDays, Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const CustomerTableComponent = ({ customers }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="grid grid-cols-4 text-gray-500 text-sm font-bold border-b pb-3">
          <span>Customer Name</span>
          <span>Birthdate</span>
          <span className="text-center">Amount Spent</span>
          <span className="text-right mr-10">Action</span>
        </div>

        {customers.map((customer) => (
          <div
            key={customer.customerId}
            className="grid grid-cols-4 items-center py-4 border-b last:border-none"
          >
            <div>
              <p className="font-semibold text-gray-800">
                {customer.firstName} {customer.lastName}
              </p>
              <p className="text-xs text-gray-400">
                ID: {customer.customerId.slice(0, 10)}...
              </p>
            </div>
            <div className="text-gray-600 flex items-center gap-2 text-sm">
              <CalendarDays className="h-4 w-4 text-gray-400" />
              {customer.birthDate}
            </div>
            <div className="text-center">
              <span className="text-green-600 font-semibold">
                ${customer.moneySpent}
              </span>
            </div>

    
            <div className="flex justify-end">
              <Link
                href={`/customers/${customer.customerId}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 px-4 py-1.5 rounded-lg hover:text-white hover:bg-gray-900 transition-colors duration-200"
              >
                <Eye className="h-4 w-4" />
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTableComponent;
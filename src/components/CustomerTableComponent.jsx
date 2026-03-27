import { CalendarDays } from "lucide-react";
import React from "react";

const CustomerTableComponent = ({ customers }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-6">
          List of All Customer
        </h2>

        {/* Header */}
        <div className="grid grid-cols-3 text-gray-500 text-sm font-bold border-b pb-3">
          <span >Customer Name</span>
          <span>Birthdate </span>
          <span className="text-right me-30">Amount Spent</span>
        </div>  

        {customers.map((customer) => (
          <div
            key={customer.customerId}
            className="grid grid-cols-3 items-center py-4 border-b last:border-none"
          >
            {/* Name + ID */}
            <div>
              <p className="font-semibold text-gray-800">
                {customer.firstName} {customer.lastName}
              </p>
              <p className="text-xs text-gray-400">
                ID: {customer.customerId}
              </p>
            </div>

            {/* Birthdate */}
            <div className="text-gray-600 flex items-center gap-2">
              <CalendarDays/> {customer.birthDate}
            </div>

            {/* Money Spent */}
            <div className="text-right">
              <span className="bg-green-100 text-green-600 px-3 py-1 me-30 rounded-lg font-semibold">
                ${customer.moneySpent}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTableComponent;
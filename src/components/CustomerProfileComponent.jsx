import Link from "next/link";
import {
  ArrowLeft,
  User,
  CalendarDays,
  CreditCard,
  Pencil,
  Trash2,
} from "lucide-react";

const CustomerProfileComponent = ({ customer }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-3xl overflow-hidden flex">
        <div className="bg-gray-100 w-56 flex-shrink-0 flex flex-col items-center justify-center py-10 px-6">
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center shadow-inner mb-4">
            <img
              src="/programmer.jpg"
              alt="JBL Headphones"
              className="w-fit h-fit rounded-[50%] border-2 border-white"
            />
          </div>
          <p className="text-lg font-bold text-gray-800 text-center">
            {customer.firstName} {customer.lastName}
          </p>
        </div>

        <div className="flex-1 p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/customers"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Customer Table
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                Full Name
              </p>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-800 font-semibold text-base">
                  {customer.firstName} {customer.lastName}
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                Total Spent
              </p>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-green-500" />
                <span className="text-gray-800 font-bold text-xl">
                  ${customer.moneySpent}
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                Birthdate
              </p>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-orange-400" />
                <span className="text-gray-800 font-semibold text-base">
                  {customer.birthDate}
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                Account ID
              </p>
              <div className="bg-gray-100 rounded-lg px-3 py-2">
                <p className="text-gray-400 text-xs font-mono break-all leading-relaxed">
                  {customer.customerId}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-semibold py-3.5 rounded-2xl hover:bg-gray-700  transition-all duration-200">
              Edit Profile
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-400 text-sm font-semibold py-3.5 rounded-2xl hover:bg-red-100 transition-all duration-200">
              Delete This User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfileComponent;

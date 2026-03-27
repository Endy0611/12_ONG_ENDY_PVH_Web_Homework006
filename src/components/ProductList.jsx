"use client";
import { useState } from "react";
import ProductCardComponent from "./ProductCardComponent";
import { Search } from "lucide-react";

export default function ProductList({ initialProducts }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div >
        <div className = "flex">
        <div className = "font-bold text-[24px]">
            List of all Products
        </div>
      <div className="relative mb-8 max-w-md ml-auto">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search product name..."
          className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
        </div>
      {filteredProducts.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-start">
          {filteredProducts.map((product) => (
            <ProductCardComponent key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-3xl bg-gray-50">
          <div className="bg-gray-200 p-4 rounded-full mb-4">
             <Search className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">No products found</h2>
          <p className="text-gray-500 mt-2">
            We couldn't find any products matching "{searchQuery}"
          </p>
          <button 
            onClick={() => setSearchQuery("")}
            className="mt-4 text-blue-600 font-semibold hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function ProductCardComponent({ product }) {
  return (
    <div className="group w-80 rounded-3xl overflow-hidden bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative bg-[#1a2a4a] h-64 flex items-center justify-center overflow-hidden">
        <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full z-10">
          NEW
        </span>
        <div className="absolute top-12 left-4 flex items-center gap-1 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
          <span className="text-yellow-400">★</span>
          <span>4.9</span>
        </div>

        {/* Cart icon - visible on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200">
            <ShoppingBag className="h-5 w-5 text-gray-800" />
          </button>
        </div>

        {/* Image with subtle scale on hover */}
        <img
          src="/programmer.jpg"
          alt="JBL Headphones"
          className="object-contain h-fit transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1">
              Flagship Series
            </p>
            <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
          </div>
          <span className="text-xl font-bold text-gray-900 whitespace-nowrap ml-4 mt-5">
            ${product.price}
          </span>
        </div>

        {/* Description — max 2 lines */}
        <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <Link
          href={`/products/${product.productId}`}
          className="mt-5 w-full bg-gray-900 text-white text-sm font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-600 active:scale-95 transition-all duration-200"
        >
          View Product
          <span className="text-base">↗</span>
        </Link>
      </div>
    </div>
  );
}
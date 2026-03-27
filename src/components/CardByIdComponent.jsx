import Link from "next/link";
import { MoveLeft } from "lucide-react";
import React from "react";

const CardByIdComponent = ({ product }) => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4 md:p-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 bg-[#f8f9fa] rounded-[40px] overflow-hidden shadow-sm">

        {/* Image Panel */}
        <div className="bg-[#f1f3f5] p-12 flex items-center justify-center relative">
          <div className="absolute top-8 left-8 flex flex-col gap-2">
            <span className="bg-black text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
              New Arrival
            </span>
            <span className="bg-blue-100 text-blue-500 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
              Free Shipping
            </span>
          </div>
          <img
            src={product.imageUrl || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"}
            alt={product.name}
            className="w-full h-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Info Panel */}
        <div className="bg-white p-12 md:p-20 flex flex-col justify-center">
          <Link
            href="/products"
            className="text-gray-400 text-xs font-bold mb-8 uppercase tracking-widest flex items-center gap-2 hover:text-gray-700 transition-colors w-fit"
          >
            <MoveLeft className="w-4 h-4" /> Back to Product
          </Link>

          <p className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
            Premium Experience
          </p>
          <h1 className="text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tighter">
            {product.name}
          </h1>

          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-4xl font-black text-slate-900">${product.price}</span>
            <div>
              <div className="text-lg text-gray-300 line-through">$1300</div>
              <div className="text-[10px] font-bold text-emerald-500 uppercase">Save 20% Today</div>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md border-l-4 border-cyan-100 pl-4">
            {product.description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default CardByIdComponent;
"use client";

import Link from "next/link";
import { MoveLeft, Heart, Share2, Play, ShoppingCart, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const CardByIdComponent = ({ product }) => {
  const [qty, setQty] = useState(1);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4 md:p-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 bg-[#f8f9fa] rounded-[40px] overflow-hidden shadow-sm">

        <div className="bg-[#f1f3f5] p-12 flex items-center justify-center relative">

          <div className="absolute top-8 left-8 flex flex-col gap-2">
            <span className="bg-black text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
              New Arrival
            </span>
            <span className="bg-sky-200 text-sky-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
              Free Shipping
            </span> 
          </div>
          <div className="absolute top-8 right-8 flex flex-col gap-3">
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
              <Heart className="w-4 h-4 text-gray-500" />
            </button>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
              <Share2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <img
            src={"/keyboard.png"}
            alt={product.name}
            className="w-full h-full object-contain "
          />
         
        </div>

        <div className="bg-white p-12 md:p-16 flex flex-col justify-center">
          <Link
            href="/products"
            className="text-gray-400 text-xs font-bold mb-8 uppercase tracking-widest flex items-center gap-2 hover:text-gray-700 transition-colors w-fit"
          >
            <MoveLeft className="w-4 h-4" /> Back to Product
          </Link>

          <p className="text-sky-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
            Premium Experience
          </p>
          <h1 className="text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tighter">
            {product.name}
          </h1>

          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-4xl font-black text-slate-900">${product.price}</span>
            <div>
              <div className="text-lg text-gray-300 line-through">$1300</div>
              <div className="text-[10px] font-bold text-emerald-500 uppercase">Save 20% Today</div>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md border-l-4 border-cyan-100 pl-4">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">
            Select Quantity
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-4 border border-gray-200 rounded-2xl px-4 py-2 w-fit">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-7 h-7 flex items-center justify-center"
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-base font-bold text-slate-900 w-4 text-center">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-7 h-7 flex items-center justify-center"
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-bold py-4 rounded-2xl hover:bg-gray-700 active:scale-95 transition-all duration-200">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
            <button className="flex-1 flex items-center justify-center bg-gray-100 text-gray-900 text-sm font-bold py-4 rounded-2xl hover:bg-gray-200 active:scale-95 transition-all duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardByIdComponent;
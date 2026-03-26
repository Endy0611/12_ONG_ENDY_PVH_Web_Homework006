import Image from "next/image";

export default function ProductCardComponent({product}) {
  return (
    <div className="w-80 rounded-3xl overflow-hidden bg-white shadow-xl">
      {/* Image Section */}
      <div className="relative bg-[#1a2a4a] h-64 flex items-center justify-center">
        {/* NEW Badge */}
        <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
          NEW
        </span>

        {/* Rating Badge */}
        <div className="absolute top-12 left-4 flex items-center gap-1 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
          <span className="text-yellow-400">★</span>
          <span>4.9</span>
        </div>

        {/* Product Image */}
        <img
          src="/headphones.png"
          alt="JBL Headphones"
          className="object-contain h-52 w-full"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Label + Price */}
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

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          {product.description}
        </p>

        {/* CTA Button */}
        <button className="mt-5 w-full bg-gray-900 text-white text-sm font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
          View Product
          <span className="text-base">↗</span>
        </button>
      </div>
    </div>
  );
}
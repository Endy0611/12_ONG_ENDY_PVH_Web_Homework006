
import Link from 'next/link';
import React from 'react'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-[200px] font-extrabold text-gray-200 absolute item-center top-50">
        404
      </h1>

      <div className="relative z-10 max-w-md">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Oops! Page not found.</h2>
        <p className="text-gray-500 mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Don't worry, our products are still here!
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Back to Homepage
          </Link>
          
          <Link 
            href="/products" 
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
          >
            Browse Products
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Need help? 
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  )
}

"use client";

import { Suspense } from "react";
import ProductGrid from "./ProductGrid";

function ProductGridFallback() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 sm:h-64 bg-gray-200 animate-pulse"></div>
          <div className="p-4">
            <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SearchableProductGrid() {
  return (
    <Suspense fallback={<ProductGridFallback />}>
      <ProductGrid />
    </Suspense>
  );
}

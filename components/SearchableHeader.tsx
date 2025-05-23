"use client";

import { Suspense } from "react";
import Header from "./Header";

function HeaderFallback() {
  return (
    <header className="bg-blue-600 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Logo</div>
          <div className="flex-1 max-w-md mx-4">
            <div className="w-full py-2 pl-10 pr-4 rounded-md bg-white"></div>
          </div>
          <div className="flex items-center bg-blue-800 text-white px-4 py-2 rounded-md">
            Cart
          </div>
        </div>
      </div>
    </header>
  );
}

export default function SearchableHeader() {
  return (
    <Suspense fallback={<HeaderFallback />}>
      <Header />
    </Suspense>
  );
}

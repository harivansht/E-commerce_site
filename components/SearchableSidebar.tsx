"use client";

import { Suspense } from "react";
import Sidebar from "./Sidebar";

function SidebarFallback() {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 bg-white rounded"></div>
            All
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 bg-white rounded"></div>
            Electronics
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 bg-white rounded"></div>
            Clothing
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 bg-white rounded"></div>
            Home
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="w-full h-2 bg-white rounded"></div>
      </div>
    </div>
  );
}

export default function SearchableSidebar() {
  return (
    <Suspense fallback={<SidebarFallback />}>
      <Sidebar />
    </Suspense>
  );
}

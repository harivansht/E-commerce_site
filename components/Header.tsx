"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useRouter, useSearchParams } from "next/navigation";

export default function Header() {
  const { cart } = useCartStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/");
    }
  };

  return (
    <header className="bg-blue-600 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Logo
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 pl-10 pr-4 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </form>

          <Link
            href="/cart"
            className="flex items-center bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded transition-colors"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            <span>Cart</span>
            {totalItems > 0 && <span className="ml-1">({totalItems})</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

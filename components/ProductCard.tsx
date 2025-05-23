"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useCartStore } from "@/store/cart";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      ...product,
      quantity: 1,
    });
  };

  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg">
        <div className="relative h-48 sm:h-64">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <p className="font-bold text-lg mb-2">${product.price}</p>
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

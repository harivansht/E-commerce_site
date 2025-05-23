"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Star, StarHalf } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { products } from "@/data/product";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg overflow-hidden border">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[...Array(Math.floor(product.rating))].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            {product.rating % 1 !== 0 && (
              <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            )}
            <span className="ml-2 text-gray-600">
              ({product.reviews} reviews)
            </span>
          </div>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">
              Category: {product.category}
            </p>
          </div>
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4">
              Quantity:
            </label>
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-1 border-r"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                className="px-3 py-1 border-l"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

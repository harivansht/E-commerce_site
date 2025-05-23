"use client";

import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { products as allProducts } from "@/data/product";
import type { Product } from "@/types";

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>(allProducts);

  // Extract individual search parameter values to use as dependencies
  const category = searchParams.get("category");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const search = searchParams.get("search");

  // Memoize the filtered products to prevent unnecessary recalculations
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by category
    if (category) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by price
    if (minPrice && maxPrice) {
      const min = Number.parseInt(minPrice);
      const max = Number.parseInt(maxPrice);
      filtered = filtered.filter((p) => p.price >= min && p.price <= max);
    }

    // Filter by search query
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [category, minPrice, maxPrice, search]);

  // Update products when filtered products change
  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          No products found. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

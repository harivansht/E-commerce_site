"use client";

import type React from "react";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState({
    all: searchParams.get("category") === null,
    electronics: searchParams.get("category") === "electronics",
    clothing: searchParams.get("category") === "clothing",
    home: searchParams.get("category") === "home",
  });

  const [priceRange, setPriceRange] = useState({
    min: searchParams.get("minPrice")
      ? Number.parseInt(searchParams.get("minPrice") as string)
      : 0,
    max: searchParams.get("maxPrice")
      ? Number.parseInt(searchParams.get("maxPrice") as string)
      : 1000,
  });

  const handleCategoryChange = (category: string) => {
    const newCategories = {
      all: category === "all",
      electronics: category === "electronics",
      clothing: category === "clothing",
      home: category === "home",
    };
    setCategories(newCategories);

    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`/?${params.toString()}`);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    setPriceRange({ ...priceRange, max: value });
  };

  const applyPriceFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("minPrice", priceRange.min.toString());
    params.set("maxPrice", priceRange.max.toString());
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              checked={categories.all}
              onChange={() => handleCategoryChange("all")}
              className="mr-2"
            />
            All
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              checked={categories.electronics}
              onChange={() => handleCategoryChange("electronics")}
              className="mr-2"
            />
            Electronics
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              checked={categories.clothing}
              onChange={() => handleCategoryChange("clothing")}
              className="mr-2"
            />
            Clothing
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              checked={categories.home}
              onChange={() => handleCategoryChange("home")}
              className="mr-2"
            />
            Home
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex justify-between text-sm mb-2">
          <span>$0</span>
          <span>$1000</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange.max}
          onChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange.min}</span>
          <span>${priceRange.max}</span>
        </div>
        <button
          onClick={applyPriceFilter}
          className="mt-2 bg-white text-blue-600 px-4 py-1 rounded text-sm font-medium hover:bg-gray-100 transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

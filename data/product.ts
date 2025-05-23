import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Running Shoes",
    description:
      "Comfortable running shoes with cushioned soles for maximum support during your runs.",
    price: 99,
    image: "/shoe.png?height=300&width=300",
    category: "Clothing",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "2",
    name: "Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
    price: 129,
    image: "/shoe.png?height=300&width=300",
    category: "Electronics",
    rating: 4.3,
    reviews: 85,
  },
  {
    id: "3",
    name: "Backpack",
    description:
      "Durable backpack with multiple compartments, perfect for daily use or travel.",
    price: 79,
    image: "/backpack.png?height=300&width=300",
    category: "Clothing",
    rating: 4.7,
    reviews: 63,
  },
  {
    id: "4",
    name: "Smartwatch",
    description:
      "Feature-rich smartwatch with health tracking, notifications, and customizable watch faces.",
    price: 249,
    image: "/smartwatch.png?height=300&width=300",
    category: "Electronics",
    rating: 4.6,
    reviews: 142,
  },
  {
    id: "5",
    name: "Sunglasses",
    description:
      "Stylish sunglasses with UV protection, perfect for sunny days.",
    price: 149,
    image: "/sunglasses.png?height=300&width=300",
    category: "Clothing",
    rating: 4.2,
    reviews: 37,
  },
  {
    id: "6",
    name: "Digital Camera",
    description:
      "High-resolution digital camera with advanced features for photography enthusiasts.",
    price: 499,
    image: "/camera.png?height=300&width=300",
    category: "Electronics",
    rating: 4.8,
    reviews: 91,
  },
  {
    id: "7",
    name: "T-shirt",
    description:
      "Comfortable cotton t-shirt available in various colors and sizes.",
    price: 29,
    image: "/t-shirt.png?height=300&width=300",
    category: "Clothing",
    rating: 4.1,
    reviews: 215,
  },
  {
    id: "8",
    name: "Smartphone",
    description:
      "Latest smartphone with cutting-edge features, high-performance processor, and excellent camera.",
    price: 699,
    image: "/smartphone.png?height=300&width=300",
    category: "Electronics",
    rating: 4.9,
    reviews: 328,
  },
];

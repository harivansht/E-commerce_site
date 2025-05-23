import ProductGrid from "@/components/ProductGrid";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

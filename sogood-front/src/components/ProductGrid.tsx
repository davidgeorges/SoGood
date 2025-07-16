import React from "react";
import ProductCard, { ProductType } from "./ProductCard";

interface ProductGridProps {
  products: ProductType[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <div className="grid grid-cols-2 gap-5 px-6 mb-24">
    {products.map((prod, i) => (
      <ProductCard key={i} prod={prod} />
    ))}
  </div>
);

export default ProductGrid;

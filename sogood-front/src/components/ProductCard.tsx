import React from "react";

export interface ProductType {
  name: string;
  subtitle: string;
  img: string;
  rating: number;
  category: string;
}

const ProductCard: React.FC<{ prod: ProductType }> = ({ prod }) => (
  <div className="bg-white p-3 rounded-2xl shadow hover:shadow-md transition flex flex-col">
    <img
      src={prod.img}
      alt={prod.name}
      className="w-full h-24 object-cover rounded-xl mb-3"
    />
    <div className="flex-1">
      <div className="font-semibold text-gray-800 text-base">{prod.name}</div>
      <div className="text-gray-500 text-sm">{prod.subtitle}</div>
    </div>
    <div className="flex items-center justify-between mt-2">
      <span className="text-yellow-500 font-semibold flex items-center">
        <svg className="w-4 h-4 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.049 9.384c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.957z"/>
        </svg>
        {prod.rating}
      </span>
      <button className="text-gray-400 hover:text-red-500 transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 21C12 21 4 13.837 4 8.5C4 5.5 6.5 3 9.5 3C11.24 3 12 4.516 12 4.516C12 4.516 12.76 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.837 12 21 12 21Z"/>
        </svg>
      </button>
    </div>
  </div>
);

export default ProductCard;

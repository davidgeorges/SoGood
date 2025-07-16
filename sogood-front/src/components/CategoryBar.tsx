import React from "react";

interface CategoryBarProps {
  categories: string[];
  selected: string;
  setSelected: (cat: string) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categories, selected, setSelected }) => (
  <div className="flex gap-2 px-6 mt-5 mb-4 overflow-x-auto no-scrollbar">
    {categories.map(cat => (
      <button
        key={cat}
        className={`px-4 py-1 rounded-full text-sm font-medium transition ${
          selected === cat
            ? "bg-red-500 text-white shadow"
            : "bg-white text-gray-700 border"
        }`}
        onClick={() => setSelected(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategoryBar;

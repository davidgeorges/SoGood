import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryBar from "./components/CategoryBar";
import ProductGrid from "./components/ProductGrid";
import BottomNav from "./components/BottomNav";
import { ProductType } from "./components/ProductCard";

const CATEGORIES = [
  "All",
  "Combos",
  "Sliders",
  "Classic",
  "Veggie",
  "Chicken",
];

const PRODUCTS: ProductType[] = [
  {
    name: "Cheeseburger",
    subtitle: "Wendy's Burger",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    category: "Classic",
  },
  {
    name: "Hamburger",
    subtitle: "Veggie Burger",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    category: "Veggie",
  },
  {
    name: "Hamburger",
    subtitle: "Chicken Burger",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    category: "Chicken",
  },
  {
    name: "Hamburger",
    subtitle: "Fried Chicken Burger",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
    category: "Chicken",
  },
];

const FoodgoApp: React.FC = () => {
  const [selected, setSelected] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const filtered = PRODUCTS.filter(
    (p) =>
      (selected === "All" || p.category === selected) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryBar categories={CATEGORIES} selected={selected} setSelected={setSelected} />
      <ProductGrid products={filtered} />
      <BottomNav />
    </div>
  );
};

export default FoodgoApp;

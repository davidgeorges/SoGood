import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (s: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => (
  <div className="flex items-center gap-3 px-6">
    <div className="flex-1 relative">
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 rounded-xl bg-white w-full shadow focus:outline-none"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </div>
    <button className="bg-red-500 hover:bg-red-600 transition rounded-xl p-2 text-white shadow">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M7 10h10M7 14h5"/>
      </svg>
    </button>
  </div>
);

export default SearchBar;

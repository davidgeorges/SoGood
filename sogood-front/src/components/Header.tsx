import React from "react";

const Header: React.FC = () => (
  <div className="p-6 flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold font-serif text-gray-800">Foodgo</h1>
      <p className="text-gray-500 mt-1 text-sm">Order your favourite food!</p>
    </div>
  </div>
);

export default Header;

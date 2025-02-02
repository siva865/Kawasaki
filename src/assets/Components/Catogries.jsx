import React, { useState } from "react";

const categories = [
  "Product",
  "Parts & Accessories",
  "Clothing & Merchandise",
  "Purchase Tools",
  "Service",
  "Racing",
  "News",
  "Green Academy",
  "W Heritage",
];

const Categories = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-t-4 border-green-500">
      <div className="container mx-auto px-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center py-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 font-semibold uppercase">
            Categories {menuOpen ? "▲" : "▼"}
          </button>
        </div>
        
        {/* Categories List */}
        <ul className={`md:flex justify-center space-x-6 py-4 ${menuOpen ? "block" : "hidden"} md:block`}>
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-gray-700 font-semibold uppercase cursor-pointer hover:text-green-600 transition"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Categories;
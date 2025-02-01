import React from "react";

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
  return (
    <nav className="bg-white shadow-md border-t-4 border-green-500">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6 py-4">
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

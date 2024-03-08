'use client'
import React, { useState } from "react";

const product = {
    name: "Star Wars: The Force Awakens Loungefly Backpack – Disney100",
    price: "$88.00",
    discounted: "$39.98",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Disney Store", href: "#" },
      { id: 2, name: "Accessories", href: "#" },
      { id: 3, name: "Adults", href: "#" },
      { id: 4, name: "Backpacks", href: "#" },
    ],
  };

const AddToBagbutton = () => {
  return (
    <>
      <button
        type="submit"
        className="mt-6 mb-0 text-white rounded-full py-5 px-8 text-xl font-bold  bg-gradient-to-r  from-[#00aaf2] from-98.4 to-[#0063e5] to-6.4% hover:bg-sign-up-hover">
        ADD TO BAG - {product.discounted}
      </button>
    </>
  );
};

export default AddToBagbutton;

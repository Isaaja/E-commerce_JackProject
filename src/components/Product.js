import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;

  return (
    <>
      <div className="w-32 md:w-48 lg:w-56 max-w-screen-xl mb-3 relative sm:mb-7">
        <Link to={`/product/${id}`}>
          <div className="border border-[#e4e4e4]  mb-4 relative overflow-hidden group transition">
            <div className="w-full h-full flex justify-center items-center">
              {/* image */}
              <div className="w-[200px] mx-auto flex justify-center items-center ">
                <img
                  className="max-h-[160px] group-hover:scale-110 transition duration-300"
                  src={image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Link>
        {/* category, title & price */}
          <div className="text-xs capitalize text-gray-500 mb-1">
            {category}
          </div>
          <h2 className="text-sm mb-8">{title}</h2>
          <h2 className="font-semibold absolute bottom-0">Rp{price}</h2>
        </div>
    </>
  );
};

export default Product;

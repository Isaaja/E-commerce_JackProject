import React, { createContext, useState } from "react";
import productData from "../data/data.json";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products] = useState(productData);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
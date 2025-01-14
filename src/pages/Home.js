import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const filtered = products.filter((item) => {
        return (
          item.category === "Kaos Lengan Panjang Premium" ||
          item.category === "Hoodie Pria Unisex" ||
          item.category === "Polo Shirt Pria Unisex" ||
          item.category === "Jack grafik" ||
          item.category === "Parfum Pria Unisex" ||
          item.category === "T-shirt Basic Pria Unisex" ||
          item.category === "T-shirt Jack the Joker Series Unisex"
        );
      });
      setFilteredProducts(filtered);
    }
  }, [products]);

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <section id="explore-products" className="py-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

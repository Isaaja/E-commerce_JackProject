import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => item.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState("");

  // Update selectedImage after product is fetched
  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center bg-gray-100">
        Loading...
      </section>
    );
  }

  const { title, price, image, image2, image3, image4, url } = product;

  // Function to handle the image click
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Image and Text Wrapper */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Image Section */}
          <div className="flex-1">
            <img className="max-w-[300px] mx-auto lg:max-w-xs rounded-lg shadow-lg" src={selectedImage} alt={title} />
            <div className="flex justify-center mt-6 gap-4">
              <img
                className="w-1/4 max-w-[80px] rounded-lg shadow-md cursor-pointer"
                src={image}
                alt="Additional view 1"
                onClick={() => handleImageClick(image)}
              />
              <img
                className="w-1/4 max-w-[80px] rounded-lg shadow-md cursor-pointer"
                src={image2}
                alt="Additional view 2"
                onClick={() => handleImageClick(image2)}
              />
              <img
                className="w-1/4 max-w-[80px] rounded-lg shadow-md cursor-pointer"
                src={image3}
                alt="Additional view 3"
                onClick={() => handleImageClick(image3)}
              />
              <img
                className="w-1/4 max-w-[80px] rounded-lg shadow-md cursor-pointer"
                src={image4}
                alt="Additional view 4"
                onClick={() => handleImageClick(image4)}
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h1>
            <div className="text-xl text-red-500 font-bold mb-6">
              Rp{price}
            </div>

            <p className="text-gray-700 mb-6">
              <h2 className="font-semibold text-lg mb-2">Bahan:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cotton Combed 24s-Extra Soft Finishing (dijamin sejuk dan nyaman dipakai)</li>
                <li>Sejuk dan nyaman saat dipakai</li>
                <li>Sablon DTF Premium (sablon lembut dan tahan lama)</li>
              </ul>
              <h2 className="font-semibold text-lg mt-4 mb-2">Detail Ukuran:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>M (Lebar 50 x Panjang 70 cm)</li>
                <li>L (Lebar 53 x Panjang 73 cm)</li>
                <li>XL (Lebar 56 x Panjang 75 cm)</li>
                <li>XXL (Lebar 59 x Panjang 77 cm)</li>
              </ul>
              <h2 className="font-semibold text-lg mt-4 mb-2">Available 5 Colors:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Navy</li>
                <li>Super Maroon</li>
                <li>Grey</li>
                <li>White</li>
                <li>Jet Black</li>
              </ul>
            </p>

            <a href={url}>
              <button className="mt-6 py-3 px-8 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300">
                Buy Now
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="inline-block ml-2">
                  <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

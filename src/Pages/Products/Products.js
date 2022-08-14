import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [bikes, setbikes] = useState([]);

  useEffect(() => {
    fetch("https://floating-bastion-52391.herokuapp.com/bike")
      .then((res) => res.json())
      .then((data) => setbikes(data));
  }, []);
  return (
    <div className='container'>
      <h1 className="text-center mt-5 fw-bold fst-italic">
        Variants Of <br /> Yamaha R15 V4
      </h1>
      <p className="text-center">
        The Yamaha YZF-R15 V4 Metallic Red and Dark Knight variants have been{" "}
        <br /> priced at Rs 1,77,400 and Rs 1,78,400 respectively
      </p>
      <div className="mt-5">
        <div className="row">
          {bikes.map((bike) => (
            <ProductsCard key={bike._id} bike={bike}></ProductsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

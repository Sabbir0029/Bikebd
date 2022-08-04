import React from "react";
import star from "../../img/five-5-star.jpg";
import "./ProductsCard.css";
import { Link } from "react-router-dom";

const ProductsCard = (props) => {
  const { _id,img,name,price} = props.bike;
  return (
    <div className="col-xxl-3 col-md-6">
    <div className="card">
      <img src={img} className="card-img-top bikeimg" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <img className="star" src={star} alt=""/>
        <p className="card-text fw-bold">Price: <small>{price}</small></p>
        <p><Link to={`/singleProduct/${_id}`} className="text-decoration-none fw-bold text-light bg-success p-2 rounded-3 border-3 border border-info ">Buy Now</Link></p>
      </div>
    </div>
  </div>
  );
};

export default ProductsCard;

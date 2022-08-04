import React from "react";
import icon from "../../img/yamaha-logo.png";
import searchIcon from "../../img/search icon white.png";
import "./SingleProduct.css";
import { Link } from "react-router-dom";

const SingleProductHeader = (props) => {
  const { name } = props.singleBike;
  return (
    <div className="d-flex justify-content-between mt-3 SingleProduct">
      <div>
        <div className="mx-4 mt-2">
          <input type="text" placeholder="type here to search" />
          <img className="searchIcon" src={searchIcon} alt="" />
        </div>
        <div className="mt-2 d-flex">
          <p className="border-end border-secondary border-2">
            <Link className="mx-2 fw-semibold text-decoration-none" to="/">
              Home
            </Link>
          </p>
          <p className="border-end border-secondary border-2">
            <Link className="mx-2 fw-semibold text-decoration-none" to="/order">
              My Order
            </Link>
          </p>
          <p className="border-end border-secondary border-2">
            <Link className="mx-2 fw-semibold text-decoration-none" to="/">
              Bike
            </Link>
          </p>
          <p className="mx-2 text-primary fw-semibold border-end border-secondary border-2 px-2">
            Yamaha
          </p>
          <p className="mx-2 px-2 text-primary fw-semibold border-end border-secondary border-2">
            R15
          </p>
          <p className="mx-2 text-muted fw-semibold">{name}</p>
        </div>
      </div>
      <div>
        <img className="w-25" src={icon} alt="" />
      </div>
    </div>
  );
};

export default SingleProductHeader;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductDetails from "./SingleProductDetails";
import SingleProductHeader from "./SingleProductHeader";
import taka from "../../img/Taka icon.png";
import like from "../../img/Like icon.png";
import comment from "../../img/comment-icon.png";
import Dislike from "../../img/Dislike-Emoji-PNG-Image.png";
import google from "../../img/google-1088004_960_720.png";
import Facebook from "../../img/Facebook_icon_2013.svg.png";
import twitter from "../../img/twitter-icon-square-logo-108D17D373-seeklogo.com.png";
import Instagram from "../../img/Instagram-Icon.png";
import "./SingleProduct.css";
import useAuth from "../../hooks/useAuth";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleBike, setSingleBike] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const url = `http://localhost:5000/bike/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleBike(data));
  }, []);

  const hadelSubmitBtn = (e) => {
    const booking = {
      singleBike: singleBike.name,
      user: user.email,
      userName: user.displayName,
      number: e.target.phoneNumber.value,
      address: e.target.address.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("You are booking a bike. Please go to My Order and make the payment!")
        }
        else{
          alert("Already have an booking!")
        }
      });
    e.preventDefault();
  };

  return (
    <div className="container">
      <SingleProductHeader singleBike={singleBike} />
      {/* single product start */}
      <div className="row d-flex m-5">
        <div className="col-md-6">
          <h3>Yamaha {singleBike.name}</h3>
          <img className="singleBikeimg" src={singleBike.img} alt="" />
          <br />
          <img className="singleBike" src={singleBike.img} alt="" />
          <img className="singleBike" src={singleBike.photo} alt="" />
          <img className="singleBikeapp" src={singleBike.app} alt="" />
        </div>
        <div className="col-md-6">
          <div className="d-flex">
            <div className="col-md-4">
              <small>POPULARITY</small>
              <br />
              <small>This Week : 6254 views</small>
              <br />
              <small>All time : 11221 views</small>
              <p className="mt-3 text-danger fw-bold">EX-SHOWROOM PRICE</p>
              <img className="taka" src={taka} alt="" />
              <samll className="fw-bold fs-5 mt-3 mb-5">
                {" "}
                {singleBike.price}
              </samll>
            </div>
            <div className="col-md-8">
              <form onSubmit={hadelSubmitBtn}>
                <input
                  type="text"
                  className="m-1 w-100 p-1"
                  disabled
                  value={user.email}
                />
                <input
                  type="text"
                  className="m-1 w-100 p-1"
                  disabled
                  value={singleBike.name}
                />
                <input
                  type="text"
                  className="m-1 w-100 p-1"
                  disabled
                  value={singleBike.price}
                />
                <input
                  type="text"
                  className="m-1 w-100 p-1"
                  required
                  name="phoneNumber"
                  placeholder="Enter Your Phone Number"
                />
                <input
                  type="text"
                  className="m-1 w-100 p-1"
                  required
                  name="address"
                  placeholder="Enter Your Address"
                />
                <br />
                <input
                  type="submit"
                  className="text-decoration-none fw-bold bg-danger mt-2 text-light px-4 py-2 rounded-3 border-3 border border-light "
                  value="Booking Now"
                />
              </form>
            </div>
          </div>
          <hr />
          <p className="fw-bold text-muted ">USER OPINION</p>
          <small className="text-primary">
            <img className="like" src={like} alt="" /> 6254 views
          </small>
          <small className="mx-5 text-primary">
            <img className="like" src={Dislike} alt="" /> 0 views
          </small>
          <small className="mx-2 text-primary">
            <img className="like" src={comment} alt="" /> 1012views
          </small>
          <p className="mt-4 text-primary">
            <img className="taka mx-2" src={taka} alt="" />
            Price List
          </p>
          <small className="text-primary">
            <img className="like mx-3 " src={Facebook} alt="" />
          </small>
          <small className="text-primary">
            <img className="like mx-3" src={google} alt="" />
          </small>
          <small className="text-primary">
            <img className="like mx-3" src={twitter} alt="" />
          </small>
          <small className="text-primary">
            <img className="like mx-3" src={Instagram} alt="" />
          </small>
        </div>
      </div>
      {/* single product end */}
      <SingleProductDetails singleBike={singleBike} />
    </div>
  );
};

export default SingleProduct;

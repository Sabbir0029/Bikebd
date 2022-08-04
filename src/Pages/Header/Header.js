import React from "react";
import Navigation from "../../Sharing/Navigation/Navigation";
import bg from "../../img/HeaderBG.jpg";
import bike from "../../img/header-bike-11.png";
import  "../../Sharing/style.css";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  const HeaderBG = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    backgroundColor: "rgba(129, 8, 24 ,1)",
    backgroundBlendMode: "multiply",
  };
  return (
    <div style={HeaderBG}>
      <div className="container">
        <div className="row">
          <Navigation />
        </div>
        <div className="row mt-5 pb-5">
          <div className="col-md-6 col-sm-12 mt-5">
            <h1 className="text-light mt-3">
              Ride-on R15 V4 <br /> With Smile
            </h1>
            <small className="text-light pt-3 mt-4 mb-4">
              R15 is the thing which i want to earn with my own money, <br />{" "}
              rather then eaming it with my parents Money
            </small>
            <br />
            <button  className="text-decoration-none fw-bold bg-danger mt-2 text-light px-4 py-2 rounded-3 border-3 border border-light ">More Info</button>
            <Row className="mt-5 p-2">
              <Col>
                <h2 className="text-light">155cc</h2>
                <small className="text-light">Engine Displ</small>
              </Col>
              <Col>
                <h2 className="text-light">1.84<span className="fs-6">bhp</span></h2>
                <small className="text-light">Man Power</small>
              </Col>
              <Col>
                <h2 className="text-light">142 Kg</h2>
                <small className="text-light">Weight</small>
              </Col>
            </Row>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="w-100" src={bike} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

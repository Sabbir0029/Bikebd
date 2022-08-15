import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import google from "../../img/google-1088004_960_720.png";
import Facebook from "../../img/Facebook_icon_2013.svg.png";
import twitter from "../../img/twitter icon.png";
import linkedin from "../../img/linkedin icon.png";

const Footer = () => {
  return (
    <div className="text-center mt-1 bg-danger pb-5">
      <h1 className="pt-5 fst-italic">
        Bike<span className="text-light fst-italic">BD</span>
      </h1>
      <p className="text-light fst-italic">
        The good news for Yamaha fan followers and well-wishers <br />
        in Bangladesh is that this webpage presents the current prices of almost
        all Yamaha motorcycles available in Bangladesh,
        <br /> as well as the latest pictures of the mentioned bikes or
        motorcycle models and very important information’s.
      </p>
      <i>
        <img className="icon" src={Facebook} alt="" />
      </i>
      <i>
        <img className="icon" src={google} alt="" />
      </i>
      <i>
        <img className="icon" src={twitter} alt="" />
      </i>
      <i>
        <img className="icon" src={linkedin} alt="" />
      </i>
      <br />
      <Link className="footertext px-5 py-1 mt-3" to="/">
        Home
      </Link>
      <Link className="footertext px-5 py-1 mt-3" to="/order">
        MY Order
      </Link>
      <Link className="footertext px-5 py-1 mt-3" to="/">
        Blog
      </Link>
      <Link className="footertext px-5 py-1 mt-3" to="/">
        Contrct Us
      </Link>
    </div>
  );
};

export default Footer;

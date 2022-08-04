import React from "react";
import imgbike from "../../img/yamaha-r15-v4-pic-11-200.jpg";
import "../../Sharing/style.css";
import ABS from "../../img/ABS.png";
import aluminum from "../../img/aluminum swingarm bike.jpg";
import upside from "../../img/upside down fork.jpg";
import Fl from "../../img/Fl engine with vva.jpg";
import quick from "../../img/quick shifter.jpg";
import traction from "../../img/traction control system.jpg";

const Feature = () => {
  return (
    <div>
      <h1 className="text-center mt-5 fw-bold fst-italic">Feature</h1>
      <p className="text-center">Yamaha R15 V4 mileage is 40 kmpl (approximate).<br/> In terms of performance, the sports bike can accelerate from 0-100 kmph in 10.1 seconds. </p>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-5">
            <div className="d-flex flex-row-reverse">
              <div>
                <img className="absimg m-4" src={ABS} alt="" />
              </div>
              <div>
                <h5 className="text-end">Dual Channel ABS</h5>
                <p className="text-end">
                  Enjoy grill psfont nice with <br />
                  super or control
                </p>
              </div>
            </div>
            <div className="d-flex flex-row-reverse mt-3">
              <div>
                <img className="absimg m-4" src={aluminum} alt="" />
              </div>
              <div>
                <h5 className="text-end">Aluminum Swingarm</h5>
                <p className="text-end">
                Aluminum Swingarm give tou the advantage of<br />
                  signifcant reduction in urspnumg weight.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row-reverse mt-4">
              <div>
                <img className="absimg m-4" src={upside} alt="" />
              </div>
              <div>
                <h5 className="text-end">Upside Down Front Forks</h5>
                <p className="text-end">
                  To take the sporly hardlng an twisty ruads <br />
                  to the next leval
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <img className="mt-4" src={imgbike} alt="" />
          </div>
          <div className="col-md-5">
            <div className="d-flex flex-row">
              <div>
                <img className="absimg m-4" src={Fl} alt="" />
              </div>
              <div>
                <h5>Fl Engine with VVA</h5>
                <p className="">
                  Enjoy grill psfont nice with <br />
                  super or control
                </p>
              </div>
            </div>
            <div className="d-flex flex-row mt-4">
              <div>
                <img className="absimg m-4" src={quick} alt="" />
              </div>
              <div>
                <h5>Quick Shifter</h5>
                <p className="">
                  Enjoy grill psfont nice with <br />
                  super or control
                </p>
              </div>
            </div>
            <div className="d-flex flex-row mt-4">
              <div>
                <img className="absimg m-4" src={traction} alt="" />
              </div>
              <div>
                <h5>Traction Control System</h5>
                <p className="">
                  Enjoy grill psfont nice with <br />
                  super or control
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

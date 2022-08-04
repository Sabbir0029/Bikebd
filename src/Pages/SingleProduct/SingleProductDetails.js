import React from "react";

const SingleProductDetails = (props) => {
  const {
    wheelertype,
    maximumpower,
    engine,
    maximumtorque,
    numberofcylinders,
    numberofgears,
    seatheight,
    brakingsystem,
  } = props.singleBike;
  return (
    <div>
      <hr />
      <h1>Specifications:</h1>
      <p className="mx-5 bg-secondary text-light px-2 mt-4">
        2-wheeler Type : <small className="mx-5">{wheelertype}</small>
      </p>
      <p className="mx-5 px-2 bg-warning">
        Engine cc(Displacement): <small className="mx-3">{engine}</small>
      </p>
      <p className="mx-5 px-2 bg-secondary text-light text-light">
        Maximum Power : <small className="mx-5">{maximumpower}</small>
      </p>
      <p className="mx-5 px-2 bg-warning">
        Maximum Torque : <small className="mx-5">{maximumtorque}</small>
      </p>
      <p className="mx-5 px-2 bg-secondary text-light">
        Number Of Gears : <small className="mx-5">{numberofgears}</small>
      </p>
      <p className="mx-5 px-2 bg-warning ">
        Number Of Cylinders :<small className="mx-5">{numberofcylinders}</small>
      </p>
      <p className="mx-5 px-2 bg-secondary text-light">
        Seat Height : <small className="mx-5">{seatheight}</small>
      </p>
      <p className="mx-5 px-2 bg-warning  mb-5">
        Braking System :<small className="mx-5">{brakingsystem}</small>
      </p>
    </div>
  );
};

export default SingleProductDetails;

import React from "react";
import "./OrderCard.css";

const OrderCard = ({ order, handelBtnDelete }) => {
  const { _id, user, singleBike, address } = order;
  return (
    <div className="col">
      <div className="square">
        <span></span>
        <span></span>
        <span></span>
        <div className="content">
          <h4>{singleBike}</h4>
          <h6>{user}</h6>
          <p>{address}</p>
          <button
            onClick={() => handelBtnDelete(_id)}
            className="text-decoration-none fw-bold bg-danger m-2 text-light px-4 py-2 rounded-3 border-3 border border-light "
          >
            Delete
          </button>
          <button className="text-decoration-none fw-bold bg-danger m-2 text-light px-4 py-2 rounded-3 border-3 border border-light ">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

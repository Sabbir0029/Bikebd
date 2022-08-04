import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../Sharing/Navigation/Navigation";
import OrderCard from "./OrderCard";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user, isLoading } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/booking?user=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="bgcolor">
      <Navigation/>
      <h1 className="text-center pt-5 fw-bold fst-italic text-light">My Orders</h1>
      <div className=" row row-cols-1 row-cols-md-3 p-5 g-4">
      {isLoading && (
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            className="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      )}
      {orders.map((order) => (
        <OrderCard key={order._id} order={order}></OrderCard>
      ))}
    </div>
    </div>
  );
};

export default MyOrder;

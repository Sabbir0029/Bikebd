import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../Sharing/Navigation/Navigation";
import OrderCard from "./OrderCard";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user, isLoading } = useAuth();

  useEffect(() => {
    fetch(`https://floating-bastion-52391.herokuapp.com/booking?user=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handelBtnDelete = (id) => {
    const prossed = window.confirm("confirm deleted");
    if (prossed) {
      const url = `https://floating-bastion-52391.herokuapp.com/booking/${id}`;
      fetch(url,{
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data=>{
        if(data.deletedCount > 0){
          const remaining = orders.filter(order=> order._id !== id);
          setOrders(remaining);
        }
      })
    }
  };

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
        <OrderCard key={order._id} handelBtnDelete={handelBtnDelete} order={order}></OrderCard>
      ))}
    </div>
    </div>
  );
};

export default MyOrder;

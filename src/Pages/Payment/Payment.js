import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51Kc1CLKBiV3NBPFsAjtSY7r0CgPhQyPb1DOJTBbTQjTyXMOztFSshkwe9JmF2QKdIDVMPj1qz04JpdDDpefw0ERM00yc3U3fd4');
const Payment = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState({});

  const {user}=useAuth();
  
  useEffect(() => {
    fetch(`http://localhost:5000/bike/${id}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, []);
  return (
    <div className="container">
      <h1>Payment: {payment.name}</h1>
      <h1>Payment Price: ${payment.price}</h1>
      <h1>Payment Email: {user.email}</h1>
      <Elements stripe={stripePromise}>
      <CheckoutForm payment={payment}/>
    </Elements>
    </div>
  );
};

export default Payment;

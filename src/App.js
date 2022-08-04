import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Register from "./Pages/Authentication/Register/Register";
import Login from "./Pages/Authentication/Login/Login";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Payment from "./Pages/Payment/Payment";
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import MyOrder from "./Pages/MyOrder/MyOrder";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/singleProduct/:id"
              element={
                <PrivateRoute>
                  <SingleProduct />
                </PrivateRoute>
              }
            />
            <Route path="/dashboard/payment/:id" element={<Payment />} />
            <Route path="/order" element={<MyOrder />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

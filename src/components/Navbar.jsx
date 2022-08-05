import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((item) => item.cart);
  return (
    <div className=" flex items-center justify-between">
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <Link className="navLink" to="/counter">
          Counter
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;

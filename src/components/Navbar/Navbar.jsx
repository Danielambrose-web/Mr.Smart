import { useState, useContext } from "react";
import { icons } from "../../assets/food";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/Cartcontext";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const { cartItems, showCart, setShowCart } = useContext(StoreContext);

  // Calculate total items in cart
  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <p>
            Mr.<span>Smart</span>
          </p>
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li
            onClick={() => {
              setMenu("menu");
            }}
            className={menu === "menu" ? "active" : ""}
          >
            <Link to="/">Menu</Link>
          </li>
          <li
            onClick={() => {
              setMenu("HIW");
            }}
            className={menu === "HIW" ? "active" : ""}
          >
            How it works
          </li>
          <li
            onClick={() => {
              setMenu("WCU");
            }}
            className={menu === "WCU" ? "active" : ""}
          >
            why Choose Mr.<span>Smart</span>
          </li>
        </ul>
      </div>
      <div className="cart" onClick={toggleCart}>
        <img src={icons.cart} alt="cart" />
        {getTotalItems() > 0 && (
          <div className="dot">
            <p>{getTotalItems()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

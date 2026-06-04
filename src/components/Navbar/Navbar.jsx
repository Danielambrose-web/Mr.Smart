import { useState } from "react";
import { icons } from "../../assets/food";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("HIW");
  return (
    <div className="navbar">
      <div className="logo">
        <p>
          Mr.<span>Smart</span>
        </p>
      </div>
      <div className="nav-links">
        <ul>
          <li
            onClick={() => {
              setMenu("menu");
            }}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </li>
          <li 
                      onClick={() => {
              setMenu("HIW");
            }} className={menu === "HIW" ? "active" : ""}>How it works</li>
          <li
                       onClick={() => {
              setMenu("WCU");
            }} className={menu === "WCU" ? "active" : ""}>
            why Choose Mr.<span>Smart</span>
          </li>
        </ul>
      </div>
      <div className="cart">
        <img src={icons.cart} alt="" />
        <div className="dot">
          <p>23</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

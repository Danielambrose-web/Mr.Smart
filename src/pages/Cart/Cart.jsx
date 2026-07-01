import { useContext } from "react";
import { StoreContext } from "../../context/Cartcontext";
import { icons } from "../../assets/food";
import "./Cart.css";

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart, setShowCart } =
    useContext(StoreContext);

  // Calculate cart totals
  let subtotal = 0;
  cartItems &&
    food_list.map((item) => {
      if (cartItems[item._id]) {
        subtotal += item.price * cartItems[item._id];
      }
    });

  const delivery_fee = 800;
  const total = subtotal + delivery_fee;

  return (
    <>
      <div className="cart-overlay" onClick={() => setShowCart(false)}></div>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your basket</h2>
          <button className="close-btn" onClick={() => setShowCart(false)}>
            <img src={icons.cross} alt="close" />
          </button>
        </div>

        <div className="cart-items">
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">₦{item.price}</p>
                  </div>
                  <div className="cart-item-controls">
                    <button
                      className="quantity-btn minus"
                      onClick={() => removeFromCart(item._id)}
                    >
                      −
                    </button>
                    <span className="quantity">{cartItems[item._id]}</span>
                    <button
                      className="quantity-btn plus"
                      onClick={() => addToCart(item._id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      // Remove all items of this type
                      for (let i = 0; i < cartItems[item._id]; i++) {
                        removeFromCart(item._id);
                      }
                    }}
                  >
                    <img  src={icons.cross} alt="delete" />
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="cart-summary">
          <h3>Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦{subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>₦{delivery_fee}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₦{total}</span>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;



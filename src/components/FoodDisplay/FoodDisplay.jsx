import { useContext } from "react";
import { StoreContext } from "../../context/Cartcontext";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list, addToCart } = useContext(StoreContext);

  const filteredFoods =
    category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  return (
    <div className="food-display">
      <div className="food-display-list">
        {filteredFoods.map((item) => (
          <div key={item._id} className="food-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="food-item-footer">
              <span className="food-item-price">${item.price}</span>
              <button
                className="add-to-basket-btn"
                onClick={() => addToCart(item._id)}
              >
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

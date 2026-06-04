import "./Filter.css";

const Filter = ({ category, setCategory }) => {
  const menuList = ["All", "Salad", "Rolls", "Deserts", "Sandwich", "Cake"];

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium
        voluptates, ipsam ducimus rerum velit nisi reiciendis earum sint sunt?
      </p>
      <div className="explore-menu-list">
        {menuList.map((item) => (
          <p
            key={item}
            onClick={() => setCategory(item)}
            className={category === item ? "active" : ""}
          >
            {item}
          </p>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Filter;

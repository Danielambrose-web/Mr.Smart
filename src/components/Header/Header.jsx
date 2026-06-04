import "./Header.css";
import { icons } from "../../assets/food";

const Header = () => {
  return (
    <div>
         <section className="hero">
      <div className="hero-content">
        <h1>
          Hot Naija meals,
          <br />
          <span>delivered</span>
          <br />
          <span>sharp-sharp.</span>
        </h1>

        <p>
          From Mr.smart kitchen to your door in 30 minutes.
          <br />
          Jollof, suya, egusi — chop life, no stress.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Order now</button>
          <button className="btn-secondary">How it works</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={icons.food_1} alt="Jollof Rice Bowl" />
      </div>
    </section> 
    </div>
  )
}

export default Header

import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { StoreContext } from "./context/Cartcontext";

const App = () => {
  const { showCart } = useContext(StoreContext);

  return (
    <div className="app">
      <Navbar />
      <Home />
      {showCart && <Cart />}
    </div>
  );
};

export default App;

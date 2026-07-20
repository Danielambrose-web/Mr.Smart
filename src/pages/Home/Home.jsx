import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import { useState } from "react";


const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <Filter category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </>
  );
};

export default Home;

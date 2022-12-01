import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Cards from "./components/Cards";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TeamList from "./data/data.json";

const App = () => {
  const [filterRestaurants, setFilterRestaurants] = useState(TeamList);
  return (
    <>
      <Header members={TeamList.length} />
      <SearchBar searchRestaurants={setFilterRestaurants} />
      <Cards data={filterRestaurants} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

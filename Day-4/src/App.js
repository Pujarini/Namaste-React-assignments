import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import Cards from "./components/Cards";
import Header from "./components/Header";
import { TeamList } from "./data/data";

const App = () => {
  return (
    <>
      <Header members={TeamList.length} />
      <Cards data={TeamList} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

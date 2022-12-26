import React, { createElement } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

// without JSX
const heading = createElement("div", { id: "title" }, [
  createElement("h1", { id: "heading1" }, "Hello World"),
  createElement("h2", { id: "heading2" }, "Hello World1"),
  createElement("h3", { id: "heading3" }, "Hello World2"),
]);

//using JSX
const heading2 = (
  <div className="title">
    <h1 id="heading1">Hello World</h1>
    <h1 id="heading2">Hello World1 jsx</h1>
    <h1 id="heading3">Hello World2 jsx</h1>
  </div>
);

const MainApp = () => {
  return (
    <>
      <Header />
      {/* <div>Main App</div> */}
      {/* <ShowHeading /> */}
    </>
  );
};

console.log(MainApp);
console.log(<MainApp />);
console.log(MainApp());

const ShowHeading = () => {
  return heading2;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);

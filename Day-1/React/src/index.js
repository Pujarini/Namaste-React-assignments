const heading = React.createElement(
  "h1",
  { className: "header" },
  "Hello World"
);
console.log(heading);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(heading);

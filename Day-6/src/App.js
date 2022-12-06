import ReactDOM from "react-dom/client";
import GithubCard from "./components/GithubCard";
import Header from "./components/Header";
import data from "./data/userGithubDetails.json";

const App = () => {
  return (
    <>
      <Header />
      <GithubCard data={data} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

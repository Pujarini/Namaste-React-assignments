import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
import data from "./data/userGithubDetails.json";
import UserCardInfo from "./components/UserCardInfo";
import { ErrorComponent } from "./components/ErrorComponent";

const App = () => {
  return (
    <>
      <Header />
      <UserCard data={data} />
    </>
  );
};

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorComponent /> },
  { path: "/user/:id", element: <UserCardInfo /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

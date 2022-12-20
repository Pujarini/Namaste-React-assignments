import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const UserCard = React.lazy(() => import("./components/UserCard"));
import Header from "./components/Header";
import data from "./data/userGithubDetails.json";
import UserCardInfo from "./components/UserCardInfo";
import { ErrorComponent } from "./components/ErrorComponent";
import UserProfile from "./components/UserProfile";
import UserRepoList from "./components/UserRepoList";
const SearchComponent = React.lazy(() =>
  import("./components/SearchComponent")
);
import AboutUsComponent from "./components/AboutUsComponent";
import Loader from "./components/Loader";
import SearchBar from "./components/SearchBar";
import { fetchUserData } from "./utils/fetchData";

const App = () => {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    displayUserData();
  }, []);

  const displayUserData = () => {
    const output = [];
    data &&
      data.map(async (user) => {
        const url = `https://api.github.com/users/${user.username}`;
        const userData = await fetchUserData(url);
        output.push(userData);
        setMemberList([...memberList, ...output]);
      });
  };

  return (
    <>
      <Header />
      <SearchBar users={memberList} searchMembers={setMemberList} />
      <Suspense fallback={<Loader />}>
        <UserCard data={memberList} />
      </Suspense>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
  },
  { path: "/user/:id", element: <UserCardInfo /> },
  {
    path: "/userprofile/:userid",
    element: <UserProfile />,
    children: [
      {
        path: "allrepos",
        element: <UserRepoList />,
      },
    ],
  },
  {
    path: "/search",
    element: (
      <Suspense fallback={<Loader />}>
        <SearchComponent />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: <AboutUsComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

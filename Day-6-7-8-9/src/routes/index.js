import React, { Suspense } from "react";
import UserCardInfo from "../components/UserCardInfo";
import ErrorComponent from "../components/error/ErrorComponent";
import UserProfile from "../components/UserProfile";
const SearchComponent = React.lazy(() =>
  import("../components/SearchComponent")
);
const UserCard = React.lazy(() => import("../components/UserCard"));
import AboutUsComponent from "../components/about/AboutUsComponent";
import UserRepoList from "../components/UserRepoList";
import LoginComponent from "../components/LoginComponent";
import Home from "../pages/Home";
import Loader from "../components/loader/Loader";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/searchMembers",
        element: (
          <Suspense fallback={<Loader />}>
            <UserCard />
          </Suspense>
        ),
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
    ],
  },
  { path: "/user/:id", element: <UserCardInfo /> },
  { path: "/login", element: <LoginComponent /> },
  {
    path: "/userprofile/:userid",
    element: <UserProfile />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "allrepos",
        element: <UserRepoList />,
      },
    ],
  },
];

export default routeConfig;

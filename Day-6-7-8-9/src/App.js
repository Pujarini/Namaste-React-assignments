import React, { Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import UserCardInfo from "./components/UserCardInfo";
import { ErrorComponent } from "./components/ErrorComponent";
import UserProfile from "./components/UserProfile";
import UserRepoList from "./components/UserRepoList";
const SearchComponent = React.lazy(() =>
  import("./components/SearchComponent")
);
const UserCard = React.lazy(() => import("./components/UserCard"));
import AboutUsComponent from "./components/AboutUsComponent";
import ThemeContext from "./components/ThemeContext";
import Loader from "./components/Loader";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`home_page  ${
        theme === "light" ? "light_mode" : "dark_mode "
      }`}
    >
      <Header />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};

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

const router = createBrowserRouter(routeConfig);

const AppLayout = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

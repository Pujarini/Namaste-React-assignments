import React, { Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import UserCardInfo from "./components/UserCardInfo";
import { ErrorComponent } from "./components/ErrorComponent";
import UserProfile from "./components/UserProfile";
const SearchComponent = React.lazy(() =>
  import("./components/SearchComponent")
);
const UserCard = React.lazy(() => import("./components/UserCard"));
import AboutUsComponent from "./components/AboutUsComponent";
import ThemeContext from "./components/ThemeContext";
import UserRepoList from "./components/UserRepoList";
import Loader from "./components/Loader";
import LoginComponent from "./components/LoginComponent";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const loginCreds = useSelector((state) => state.login.value);

  return (
    <div
      className={`home_page  ${
        theme === "light" ? "bg-white text-black" : "bg-slate-900 text-white"
      }`}
    >
      <Header />
      <div className=" flex justify-center items-center gap-5 h-full">
        <span className="text-3xl text-left">Hello {loginCreds.name}</span>
        <Link to="/searchMembers">
          <button className="mr-5">Search Avengers</button>
        </Link>
        <Link to="/search">
          <button className="mr-5">Search Github users by Location</button>
        </Link>
      </div>

      <div className="flex space-between flex-col items-center">
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

const router = createBrowserRouter(routeConfig);

const AppLayout = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

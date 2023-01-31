import { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import routeConfig from "./routes";

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

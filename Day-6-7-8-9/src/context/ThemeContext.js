import { createContext } from "react";

const themes = {
  theme: "dark",
  setTheme: () => {},
};

const ThemeContext = createContext(themes);

export default ThemeContext;

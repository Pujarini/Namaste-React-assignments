import { createContext } from "react";

const themes = {
  light: {
    background: "#fff",
    color: "#1d1d1d",
  },
  dark: {
    background: "#1d1d1d",
    color: "#fff",
  },
};

const ThemeContext = createContext(themes);

export default ThemeContext;

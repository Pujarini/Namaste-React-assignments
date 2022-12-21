import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const AboutUsComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`about_us_container ${
        theme === "dark" ? "dark_mode" : "light_mode"
      }`}
    >
      <h1>About Us</h1>
      <span>
        This app has the information about Avengers Team and if you wish to
        search for Github users based on location
      </span>
    </div>
  );
};

export default AboutUsComponent;

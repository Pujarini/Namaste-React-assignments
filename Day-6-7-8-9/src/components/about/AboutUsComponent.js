import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const AboutUsComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col space-between items-center font-bold text-xl h-screen p-10 ${
        theme === "light" ? "bg-white text-black" : "bg-slate-900 text-white"
      }`}
    >
      <h1>About Us</h1>
      <span className="m-5">
        This app has the information about Avengers Team and if you wish to
        search for Github users based on location
      </span>
    </div>
  );
};

export default AboutUsComponent;

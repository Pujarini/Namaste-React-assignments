import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        return (
          <div className="h-50 bg-yellow-300 flex justify-between p-2 text-black">
            <Link to="/">
              <h2 className="font-bold text-2xl">AVENGERS</h2>
            </Link>

            <div className="flex space-between">
              <Link to="/searchMembers">
                <span className="mr-5">Search Avengers</span>
              </Link>
              <Link to="/search">
                <span className="mr-5">Search Github users by Location</span>
              </Link>
              <Link to="/about">
                <span className="mr-5">About</span>
              </Link>
              <img
                src={theme === "dark" ? Moon : Sun}
                className="h-10 w-10 cursor-pointer border-4 border-black rounded-full"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;

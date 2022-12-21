import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        return (
          <div className="header-container">
            <h2>Avengers Github Details</h2>
            <div className="links">
              <Link to="/searchMembers">
                <span>Search Avengers</span>
              </Link>
              <Link to="/search">
                <span>Search Github users by Location</span>
              </Link>
              <Link to="/about">
                <span>About</span>
              </Link>
              {/* <span>{theme}</span> */}
              <img
                src={theme === "dark" ? Moon : Sun}
                style={{
                  height: "50px",
                  width: "50px",
                  cursor: "pointer",
                  border: "5px solid black",
                  borderRadius: "50%",
                }}
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

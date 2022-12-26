import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/loginSlice";

const Header = () => {
  const loginCreds = useSelector((state) => state.login.value);

  const dispatch = useDispatch();

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        return (
          <div className="h-50 bg-yellow-300 flex justify-between p-2 text-black">
            <Link to="/">
              <h2 className="font-bold text-2xl">AVENGERS</h2>
            </Link>

            <div className="flex space-between">
              <Link to="/about">
                <span className="mr-5">About</span>
              </Link>
              {loginCreds.name && loginCreds.password ? (
                <>
                  <span className="mr-5">Welcome {loginCreds.name}</span>
                  <span className="mr-5" onClick={() => dispatch(logout())}>
                    Logout
                  </span>
                </>
              ) : (
                <Link to="/login">
                  <span className="mr-5">Login</span>
                </Link>
              )}
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

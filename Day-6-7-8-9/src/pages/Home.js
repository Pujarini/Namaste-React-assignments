import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const loginCreds = useSelector((state) => state.login.value);

  return (
    <div
      className={`home_page  ${
        theme === "light" ? "bg-white text-black" : "bg-slate-900 text-white" // constant
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

export default Home;

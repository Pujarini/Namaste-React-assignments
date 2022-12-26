import { useContext, useState } from "react";
import stateData from "../data/stateCity.json";
import { fetchUserData } from "../utils/fetchData";
import useCityList from "../utils/useCities";
import CardComponent from "./CardComponent";
import Loader from "./Loader";
import NoResultComponent from "./NoResultComponent";
import ThemeContext from "./ThemeContext";

const SearchComponent = () => {
  const [stateOption, setStateOption] = useState("");
  const [cityOption, setCityOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const cities = useCityList(stateOption);

  const { theme } = useContext(ThemeContext);

  const fetchGithubUsers = async () => {
    if (cityOption) {
      const url = `https://api.github.com/search/users?q=location:${cityOption}`;
      const users = await fetchUserData(url);
      setLoading(false);
      if (users.items.length > 0) {
        setUsers(users.items);
      }
    }
  };

  const fetchUsers = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchGithubUsers();
  };

  return (
    <div
      className={`flex justify-center items-center flex-col h-screen${
        theme === "light" ? "bg-white text-black" : "bg-slate-900 text-white"
      }`}
    >
      <h1 className="text-yellow-300 m-5 text-3xl">
        Search Github users by Location
      </h1>
      <div className="flex items-center space-between mb-5">
        <select
          value={stateOption}
          onChange={(e) => {
            setStateOption(e.target.value);
            setUsers([]);
          }}
          className="outline-none border-none mr-3 h-6 rounded-2xl  cursor-pointer text-black"
        >
          {Object.keys(stateData).map((stateName) => {
            return (
              <option value={stateName} key={stateName}>
                {stateName}
              </option>
            );
          })}
        </select>

        {cities && (
          <select
            value={cityOption}
            onChange={(e) => {
              setCityOption(e.target.value);
              setUsers([]);
            }}
            className="outline-none border-none mr-3 h-6 rounded-2xl  cursor-pointer text-black"
          >
            {cities &&
              cities.map((city) => {
                return (
                  <option value={city} key={city}>
                    {city}
                  </option>
                );
              })}
          </select>
        )}
        <button
          onClick={fetchUsers}
          className="border-none outline-none h-7 p-1 mb-2 mt-1 rounded-md text-md font-medium cursor-pointer bg-yellow-300 text-black text-center"
        >
          Search
        </button>
      </div>
      {users.length > 0 && (
        <h1 className="text-yellow-300 m-5 text-3xl">
          List of {users.length} users at {cityOption}
        </h1>
      )}

      <div className="flex items-center justify-center gap-3 flex-wrap p-6">
        {loading && <Loader />}
        {users.length > 0 ? (
          users.map((user) => {
            return <CardComponent user={user} />;
          })
        ) : (
          <NoResultComponent />
        )}
      </div>
    </div>
  );
};

export default SearchComponent;

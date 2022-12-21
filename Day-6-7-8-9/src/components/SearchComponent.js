import React, { useContext, useState } from "react";
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
      if (users.items.length > 0) {
        setUsers(users.items);
        setLoading(false);
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
      className={`search_container ${
        theme === "dark" ? "dark_mode" : "light_mode"
      }`}
    >
      <h1>Search Github users by Location</h1>
      <div className="search_user_container">
        <select
          value={stateOption}
          onChange={(e) => {
            setStateOption(e.target.value);
            setUsers([]);
          }}
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
        <button onClick={fetchUsers}>Search</button>
      </div>
      {users.length > 0 && (
        <h1>
          List of {users.length} users at {cityOption}
        </h1>
      )}

      <div className="user_list_container">
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

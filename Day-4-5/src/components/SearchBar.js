import React, { useState } from "react";
import TeamList from "../data/data.json";

const SearchBar = ({ searchRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  const filterRestaurants = (searchText) => {
    return TeamList.filter((mem) =>
      mem.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const restList = filterRestaurants(searchText);
    searchRestaurants(restList);
  };

  const filterMembers = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={formSubmitHandler}>
        <input
          placeholder="search members"
          className="search-input"
          value={searchText}
          onChange={filterMembers}
        />
        <button className="search-btn"> Search Members</button>
      </form>
    </div>
  );
};

export default SearchBar;

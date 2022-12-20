import React, { useState } from "react";

const SearchBar = ({ searchMembers, users, fetchUserData }) => {
  const [searchText, setSearchText] = useState("");

  const filterMembers = (searchText) => {
    return users.filter((mem) =>
      mem.login.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    // return users[0];
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(searchText);
    if (searchText) {
      const restList = filterMembers(searchText);
      searchMembers(restList);
    } else {
      fetchUserData();
    }
    //

    // searchMembers(restList);
  };

  const searchMember = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={formSubmitHandler}>
        <input
          placeholder="search members"
          className="search-input"
          value={searchText}
          onChange={searchMember}
        />
        <button className="search-btn"> Search Members</button>
      </form>
    </div>
  );
};

export default SearchBar;
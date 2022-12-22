import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

const SearchBar = ({ searchMembers, users, fetchUserData }) => {
  const [searchText, setSearchText] = useState("");
  const { theme } = useContext(ThemeContext);

  const filterMembers = (searchText) => {
    return users.filter((mem) =>
      mem.login.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (searchText) {
      const restList = filterMembers(searchText);
      searchMembers(restList);
    } else {
      fetchUserData();
    }
  };

  const searchMember = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex mt-5 justify-center">
      <form onSubmit={formSubmitHandler}>
        <input
          placeholder="search members"
          className="mr-2 p-2 border-black border-2 text-black "
          value={searchText}
          onChange={searchMember}
        />
        <button
          className={`border-2 p-2 bg-yellow-300 text-black ${
            theme === "light" ? "border-black" : "border-slate-400 "
          } `}
        >
          {" "}
          Search Members
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

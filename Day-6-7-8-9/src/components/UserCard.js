import { useEffect, useState } from "react";
import { fetchUserData } from "../utils/fetchData";
import CardComponent from "./CardComponent";
import SearchBar from "./SearchBar";
import data from "../data/userGithubDetails.json";

const UserCard = () => {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    displayUserData();
  }, []);

  const displayUserData = () => {
    const output = [];
    data &&
      data.map(async (user) => {
        const url = `https://api.github.com/users/${user.username}`;
        const userData = await fetchUserData(url);
        output.push(userData);
        setMemberList([...memberList, ...output]);
      });
  };

  return (
    <>
      <SearchBar
        users={memberList}
        searchMembers={setMemberList}
        fetchUserData={displayUserData}
      />
      <div className="card-container">
        {memberList.length > 0 &&
          memberList.map((item) => {
            return <CardComponent user={item} showLink />;
          })}
      </div>
    </>
  );
};

export default UserCard;

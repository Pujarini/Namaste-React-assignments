import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchUserData } from "../utils/fetchData";
import Loader from "./Loader";
import RepoCard from "./RepoCard";
import ThemeContext from "../context/ThemeContext";

const UserCardInfo = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [userRepo, setuserRepo] = useState([]);
  useEffect(() => {
    displayUserInfo();
  }, [id]);

  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme);

  const displayUserInfo = async () => {
    const url = `https://api.github.com/users/${id}`;
    const userInfo = await fetchUserData(url);
    getUserRepo(userInfo.repos_url);
    setUserData([userInfo]);
  };

  const getUserRepo = async (url) => {
    const repoData = await fetchUserData(url);
    repoData.sort(function (a, b) {
      return b.stargazers_count - a.stargazers_count;
    });
    setuserRepo(repoData.slice(0, 5));
  };

  if (userRepo && userRepo.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className="w-full">
        <div
          className={`flex justify-center items-center flex-col min-h-screen relative p-10 ${
            theme === "light"
              ? "bg-white text-black"
              : "bg-slate-900 text-white"
          } `}
        >
          <img
            src={userData[0]?.avatar_url}
            alt="user_img"
            className="w-30 h-28 rounded-full absolute top-2"
          />
          <h1 className="mt-20 mb-5 border-b-2 border-b-slate-200 text-4xl">
            {userData[0]?.login}
          </h1>
          <h3 className="text-slate-200 text-lg">{userData[0]?.bio}</h3>

          <Link to={`/userprofile/${id}`}>
            <button className="border-none outline-none h-7 p-1 mb-2 mt-5 rounded-md text-md font-medium cursor-pointer bg-yellow-300 text-black text-center">
              Know me
            </button>
          </Link>

          <h1 className="mt-2 text-yellow-300 text-3xl">My Top repositories</h1>
          <div className="flex justify-center items-center gap-4 flex-wrap mt-8 w-full">
            {userRepo &&
              userRepo.map((item) => {
                return <RepoCard card={item} key={item.id} />;
              })}
          </div>
        </div>
      </div>
    );
  }
};

export default UserCardInfo;

import React, { Component } from "react";
import { fetchUserData } from "../utils/fetchData";
import Loader from "./Loader";
import RepoCard from "./RepoCard";
import WithRouter from "./WithRouter";

class UserRepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRepos: [],
    };
    console.log("child - constructor");
  }

  componentDidMount() {
    console.log("child - componentDidMount");
    this.displayUserRepos();
  }

  async displayUserRepos() {
    const { userid } = this.props.params;
    const url = `https://api.github.com/users/${userid}/repos`;
    const userRepos = await fetchUserData(url);
    this.setState({ userRepos: userRepos });
  }
  render() {
    const { userRepos } = this.state;
    console.log("child - render");
    return (
      <div className="flex justify-center items-center gap-4 flex-wrap mt-7">
        <h1 className="text-2xl text-yellow-300 border-b-2">My Repo List</h1>
        <div className="flex flex-wrap gap-3 p-10 justify-center">
          {userRepos ? (
            userRepos.map((item) => {
              return <RepoCard card={item} />;
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default WithRouter(UserRepoList);

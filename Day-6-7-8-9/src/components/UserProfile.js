import { Component } from "react";
import { Outlet } from "react-router";
import { fetchUserData } from "../utils/fetchData";
import CardComponent from "./CardComponent";
import ThemeContext from "../context/ThemeContext";
import WithRouter from "../hoc/WithRouter";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
    };
    console.log("parent - constructor");
  }

  componentDidMount() {
    console.log("parent - componentDidMount");
    this.displayUserInfo();
  }

  async displayUserInfo() {
    const { userid } = this.props.params;
    const url = `https://api.github.com/users/${userid}`;
    const userInfo = await fetchUserData(url);
    this.setState({ userDetails: userInfo });
  }

  render() {
    const { userDetails } = this.state;
    console.log("parent - render");
    return (
      <ThemeContext.Consumer>
        {({ theme }) => {
          return (
            <div
              className={
                theme === "light"
                  ? "bg-white text-black"
                  : "bg-slate-900 text-white"
              }
            >
              <CardComponent user={userDetails} showLink={false} showAllRepos />
              <Outlet />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default WithRouter(UserProfile);

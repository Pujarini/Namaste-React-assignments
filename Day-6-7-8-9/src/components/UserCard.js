import { useState } from "react";
import CardComponent from "./CardComponent";
import NoResultComponent from "./NoResultComponent";

const UserCard = ({ data }) => {
  const [teamData] = useState(data);

  return (
    <div className="card-container">
      {teamData.length > 0 &&
        teamData.map((item) => {
          return <CardComponent user={item} showLink />;
        })}
      {teamData.length === 0 && <NoResultComponent />}
    </div>
  );
};

export default UserCard;

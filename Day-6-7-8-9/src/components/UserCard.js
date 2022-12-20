import CardComponent from "./CardComponent";

const UserCard = ({ data }) => {
  return (
    <div className="card-container">
      {data.length > 0 &&
        data.map((item) => {
          return <CardComponent user={item} showLink />;
        })}
      {/* {teamData.length === 0 && <NoResultComponent />} */}
    </div>
  );
};

export default UserCard;

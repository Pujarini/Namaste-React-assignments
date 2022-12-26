import React, { useState } from "react";
import "./styles.css";

const Cards = ({ data }) => {
  return (
    <div className="card-list">
      {data &&
        data.map((item) => {
          return (
            <div className="member-card" key={item.id}>
              <div className="member-details">
                <div>{`Team Member #${item.id}`}</div>
                <h1 className="member-name">{item.name}</h1>
                <h3 className="member-role">{item.designation}</h3>
                <span className="member-org">{item.company}</span>
                <br />
                <span className="member-place">{item.place}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;

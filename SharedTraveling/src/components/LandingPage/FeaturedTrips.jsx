import React from "react";

const FeaturedTrips = (props) => {
  return (
    <div>
      <h2>Entries:</h2>
      {props.items.map((item, index) => {
        return (
          <div style={{ marginTop: "2rem" }} key={index}>
            <p>
              Index {index}: {item.fields.title}, id: {item.fields.id}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedTrips;

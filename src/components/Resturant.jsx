import React from "react";

const Resturant = (props) => {
  return (
    <div className="container divider">
      <div className="cards">
        {props.resturant.map((el) => (
          <>
            <div className="card">
              <img width="254" height="160px" src={el.image} />
              <div className="restaurant-details">
                <div className="restaurant-title">{el.name}</div>
                <div className="restaurant-subtitle">
                 { el.category.join("|")}
                </div>
              </div>
              <div className="restaurant-info">
                <div className="restaurant-ratings">
                  <i className="material-icons star-icon">star</i> {el.rating}
                </div>
                .<div className="restaurant-delivery-timings"> {el.deliverytimg}</div> .
                <div className="restaurant-cost-for-two">{el.cost}</div>
              </div>
              <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">{el.offer}</span>
              </div>
            </div>
            ;
          </>
        ))}

      </div>
    </div>
  );
};

export default Resturant;

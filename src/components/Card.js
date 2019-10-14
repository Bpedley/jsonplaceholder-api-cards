import React from "react";

function Card({ cards }) {
  return (
    <React.Fragment>
      {cards.map(item => {
        return (
          <div key={item.id} className="card">
            <img src={item.url} alt={`${item.title}`} />
            <div className="card-info">
              <p>{item.title}</p>
              <small>albumId: {item.albumId}</small>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Card;

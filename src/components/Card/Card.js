import React from "react";
import "./Card.css";

function Card({ cards }) {
  return (
    <>
      {cards.map(item => {
        return (
          <div key={item.id} className="card">
            <img src={item.url} alt={`${item.title}`} />
            <div className="card-info">
              <p>{item.title}</p>
              <small>Id: {item.id}</small>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;

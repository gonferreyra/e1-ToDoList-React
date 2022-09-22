import React from "react";

const PokeCard = ({ name, img }) => {
  return (
    <div className="card__container">
      <div className="card__container-name">
        <h2>{name}</h2>
      </div>
      <div className="card__container-img">
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokeCard;

import React from "react";
import "./card.css";
function Card({ data }) {
  const removeExtension = (data) => {
    console.log(data);
  };
  return (
    <div className="card">
      <div className="top">
        <img src={data?.icon} alt={data?.alt} width={50} />
        <div className="details">
          <p className="name">{data?.name}</p>
          <small>{data?.details}</small>
        </div>
      </div>
      <div className="bottom">
        <button
          type="reset"
          className="btn "
          onClick={() => removeExtension(data?.name)}
        >
          Remove
        </button>
        <label htmlFor="state"></label>
        <input id="state" type="checkbox" />
      </div>
    </div>
  );
}

export default Card;

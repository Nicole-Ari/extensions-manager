import React from "react";
import "./card.css";
import extensions from "../data/extensionsList";
function Card({ data, handleList, handleSelectedList, list, selectedList }) {
  const removeExtension = (data) => {
    const newSelectedList = selectedList.filter((el) => el !== data);
    extensions.map((el) => el === data && (el.removed = true));

    handleSelectedList(newSelectedList);
    handleList([...list, data]);
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
          onClick={() => removeExtension(data)}
        >
          {data.removed ? "Add" : "Remove"}
        </button>
        <label htmlFor="state"></label>
        <input id="state" type="checkbox" />
      </div>
    </div>
  );
}

export default Card;

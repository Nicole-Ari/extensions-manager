import React, { useEffect } from "react";
import "./card.css";
import extensions from "../data/extensionsList";

function Card({ data, handleList, handleSelectedList, list, selectedList }) {
  const removeExtension = (dt) => {
    const newSelectedList = selectedList.filter((el) => el !== dt);
    extensions.map((el) => el === dt && (el.removed = true));

    handleSelectedList(newSelectedList);
    handleList([...list, dt]);
  };

  const addExt = (dt) => {
    const newList = list.filter((el) => el !== dt);
    extensions.map((el) => el === dt && (el.removed = false));
    handleSelectedList([...selectedList, dt]);
    handleList(newList);
  };

  const handleClick = (event, dt) => {
    const state = event.target.checked;

    const lt = selectedList.map((el) =>
      el.name === dt.name
        ? { ...el, active: state }
        : { ...el, active: dt.active },
    );
    handleSelectedList(lt);
  };
  useEffect(() => {}, [selectedList]);
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
          onClick={
            data?.removed ? () => addExt(data) : () => removeExtension(data)
          }
        >
          {data?.removed ? "Add" : "Remove"}
        </button>
        <label htmlFor="state"></label>
        <input
          id="state"
          type="checkbox"
          onChange={(e) => handleClick(e, data)}
          checked={data?.active}
        />
      </div>
    </div>
  );
}

export default Card;

import React, { useEffect, useRef } from "react";
import "./card.css";
import extensions from "../data/extensionsList";

function Card({
  data,
  checkboxId,
  handleList,
  handleSelectedList,
  list,
  selectedList,
  setPrevlist,
}) {
  const ref = useRef();
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
    const lt = selectedList.map((el) =>
      el.name === dt.name ? { ...el, active: event.target.checked } : el,
    );
    handleSelectedList(lt);
    setPrevlist(lt);
  };
  const setActive = () => {};
  useEffect(() => {
    ref.current.classList.toggle("on", data.active);
  }, [data.active]);
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
          className="btn reset"
          onClick={
            data?.removed ? () => addExt(data) : () => removeExtension(data)
          }
        >
          {data?.removed ? "Add" : "Remove"}
        </button>
        <label
          htmlFor={checkboxId}
          ref={ref}
          className="checkCont"
          onClick={setActive}
          tabIndex={0}
        >
          <span></span>
          <input
            className="state"
            id={checkboxId}
            type="checkbox"
            onChange={(e) => handleClick(e, data)}
            checked={data?.active}
          />
        </label>
      </div>
    </div>
  );
}

export default Card;

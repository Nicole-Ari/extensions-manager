import React, { useEffect, useState } from "react";
import Card from "./Card";
import searchIcon from "../assets/images/icon-search.svg";
import { useNavigate, useOutletContext } from "react-router-dom";
import extensions from "../data/extensionsList";

function SelectedExtensions() {
  const { list, setList, selectedList, setSelectedList } = useOutletContext();
  const [prevlist, setPrevlist] = useState([]);
  const [activeList, setActiveList] = useState(false);
  const [inactiveList, setInactiveList] = useState(false);

  const showActiveExt = () => {
    setActiveList(true);
    if (inactiveList) {
      setInactiveList(!inactiveList);
    }
  };

  const showAll = () => {
    setSelectedList(prevlist);
    setActiveList(false);
    setInactiveList(false);
  };

  const showInactiveExt = () => {
    setInactiveList(true);
    if (activeList) {
      setActiveList(!activeList);
    }
  };

  useEffect(() => {
    setPrevlist(selectedList);
  }, [prevlist]);

  return (
    <div className="items">
      <div className="item">
        <h3>Selected Extensions List</h3>
        <div className="options">
          <button className="btn btn-all actif" onClick={showAll}>
            All
          </button>
          <button className="btn btn-active" onClick={showActiveExt}>
            Active
          </button>
          <button className="btn btn-incative" onClick={showInactiveExt}>
            Inactive
          </button>
        </div>
      </div>
      <div className="cards-container">
        {activeList &&
          selectedList
            ?.filter((el) => el.active === true)
            .map((el, index) => {
              const checkboxId = `state-${el.name}`;
              return (
                <Card
                  data={el}
                  key={el.name}
                  checkboxId={checkboxId}
                  list={list}
                  selectedList={selectedList}
                  handleSelectedList={setSelectedList}
                  handleList={setList}
                  setPrevlist={setPrevlist}
                />
              );
            })}
        {inactiveList &&
          selectedList
            ?.filter((el) => el.active === false)
            .map((el, index) => {
              const checkboxId = `state-${el.name}`;
              return (
                <Card
                  data={el}
                  key={el.name}
                  checkboxId={checkboxId}
                  list={list}
                  selectedList={selectedList}
                  handleSelectedList={setSelectedList}
                  handleList={setList}
                  setPrevlist={setPrevlist}
                />
              );
            })}
        {!inactiveList &&
          !activeList &&
          selectedList.map((el, index) => {
            const checkboxId = `state-${el.name}`;
            return (
              <Card
                data={el}
                key={el.name}
                checkboxId={checkboxId}
                list={list}
                selectedList={selectedList}
                handleSelectedList={setSelectedList}
                handleList={setList}
                setPrevlist={setPrevlist}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SelectedExtensions;

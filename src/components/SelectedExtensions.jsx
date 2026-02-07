import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { useOutletContext } from "react-router-dom";

function SelectedExtensions() {
  const { list, setList, selectedList, setSelectedList } = useOutletContext();
  const [prevlist, setPrevlist] = useState([]);
  const [activeExtList, setActiveExtList] = useState([]);
  const [inactiveExtList, setInactiveExtList] = useState([]);
  const [activeList, setActiveList] = useState(false);
  const [inactiveList, setInactiveList] = useState(false);
  const [loading, setLoading] = useState(true);
  const all = useRef();
  const active = useRef();
  const inactive = useRef();

  const showActiveExt = () => {
    setActiveList(true);
    if (inactiveList) {
      setInactiveList(!inactiveList);
    }
    all.current.classList.remove("actif");
    active.current.classList.add("actif");
    inactive.current.classList.remove("actif");
  };

  const showAll = () => {
    setSelectedList(prevlist);
    setActiveList(false);
    setInactiveList(false);
    all.current.classList.add("actif");
    active.current.classList.remove("actif");
    inactive.current.classList.remove("actif");
  };

  const showInactiveExt = () => {
    setInactiveList(true);
    if (activeList) {
      setActiveList(!activeList);
    }
    all.current.classList.remove("actif");
    active.current.classList.remove("actif");
    inactive.current.classList.add("actif");
  };

  useEffect(() => {
    if (selectedList.length !== 0) {
      setLoading(false);
    }
    setPrevlist(selectedList);

    setActiveExtList(selectedList.filter((el) => el.active === true));
    setInactiveExtList(selectedList.filter((el) => el.active === false));
  }, [prevlist, selectedList]);

  return (
    <div className="items">
      <div className="item">
        <h3>Extensions List</h3>
        <div className="options">
          <button className="btn btn-all actif" ref={all} onClick={showAll}>
            All
          </button>
          <button
            className="btn btn-active"
            ref={active}
            onClick={showActiveExt}
          >
            Active
          </button>
          <button
            className="btn btn-incative"
            ref={inactive}
            onClick={showInactiveExt}
          >
            Inactive
          </button>
        </div>
      </div>
      {loading && <div className="result">Loading ...</div>}
      {!loading && activeList && activeExtList.length === 0 && (
        <div className="result">No extensions are currently active</div>
      )}
      {!loading && inactiveList && inactiveExtList.length === 0 && (
        <div className="result">No disabled extensions</div>
      )}
      {!loading &&
        !inactiveList &&
        !activeList &&
        selectedList.length === 0 && (
          <div className="result">No extensions added yet</div>
        )}

      <div className="cards-container">
        {activeList &&
          activeExtList.length !== 0 &&
          activeExtList
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
          inactiveExtList.length !== 0 &&
          inactiveExtList
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
          selectedList.length !== 0 &&
          selectedList.map((el, index) => {
            const checkboxId = `state-${el.name}`;
            return (
              <Card
                data={el}
                key={index}
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

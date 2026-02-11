import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "./selectedExtensions.css";
import { ReactComponent as SearchIcon } from "../assets/images/icon-search.svg";
import { useNavigate, useOutletContext } from "react-router-dom";
import extensions from "../data/extensionsList";

function SelectedExtensions() {
  const { list, setList, selectedList, setSelectedList } = useOutletContext();
  const [prevlist, setPrevlist] = useState([]);
  const [activeExtList, setActiveExtList] = useState([]);
  const [inactiveExtList, setInactiveExtList] = useState([]);
  const [activeList, setActiveList] = useState(false);
  const [inactiveList, setInactiveList] = useState(false);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
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

  const handleClick = () => {
    Navigate("/add");
  };

  const handleChange = (e) => {
    const text = e.target.value.toLowerCase();
    const filter = prevlist.filter((el) =>
      el.name.toLowerCase().includes(text),
    );
    setSelectedList(filter);
  };

  useEffect(() => {
    if (selectedList.length !== 0) {
      setLoading(false);
    }

    setActiveExtList(selectedList.filter((el) => el.active === true));
    setInactiveExtList(selectedList.filter((el) => el.active === false));
  }, [prevlist, selectedList]);

  useEffect(() => {
    setPrevlist(selectedList);
  }, [prevlist]);

  useEffect(() => {
    setSelectedList(extensions.filter((el) => !el.removed));
  }, [setSelectedList]);

  return (
    <div className="items">
      <div className="item">
        <h3>Extensions List</h3>
        <div className="options">
          <span className="btn search">
            <span className="searchIcon">
              <SearchIcon width={15} />
            </span>
            <input
              type="text"
              className="searchInput"
              onChange={handleChange}
            />
          </span>
          <div className="buttonContainer">
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
            <button className="btn " onClick={handleClick}>
              +
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="result">Loading ...</div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default SelectedExtensions;

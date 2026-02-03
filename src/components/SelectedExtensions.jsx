import React, { useEffect, useState } from "react";
import Card from "./Card";
import searchIcon from "../assets/images/icon-search.svg";
import { useNavigate, useOutletContext } from "react-router-dom";

function SelectedExtensions() {
  const { list, setList, selectedList, setSelectedList } = useOutletContext();
  const [prevlist, setPrevlist] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add");
  };

  const handleChange = (event) => {
    const text = event.target.value;

    if (text !== "") {
      const newList = prevlist.filter((el) =>
        el.name.toLowerCase().includes(text.toLowerCase()),
      );
      setSelectedList(newList);
    } else {
      setSelectedList(prevlist);
    }
  };

  const showActiveExt = () => {
    const lt = prevlist.filter((el) => el.active === true);
    console.log(lt);
    setSelectedList(lt);
  };

  const showAll = () => {
    setSelectedList(prevlist);
  };

  const showInactiveExt = () => {
    const lt = prevlist.filter((el) => el.active === false);
    console.log(lt);
    setSelectedList(lt);
  };

  useEffect(() => {
    setPrevlist(selectedList);
  }, [prevlist]);

  return (
    <div className="items">
      <div className="item">
        <h3>Selected Extensions List</h3>
        <div className="options">
          <span className="search">
            <img src={searchIcon} alt="search icon" width={15} />
            <input type="text" onChange={(e) => handleChange(e)} />
          </span>

          <button className="btn btn-all actif" onClick={showAll}>
            All
          </button>
          <button className="btn btn-active" onClick={showActiveExt}>
            Active
          </button>
          <button className="btn btn-incative" onClick={showInactiveExt}>
            Inactive
          </button>
          <button className="switch-btn" onClick={handleClick}>
            +
          </button>
        </div>
      </div>
      <div className="cards-container">
        {selectedList?.map((el, index) => (
          <Card
            data={el}
            key={index}
            list={list}
            selectedList={selectedList}
            handleSelectedList={setSelectedList}
            handleList={setList}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectedExtensions;

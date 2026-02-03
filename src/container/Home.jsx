import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import extensions from "../data/extensionsList";
import "./home.css";
import Card from "../components/Card";
function Home(props) {
  const [darkmode, setDarkmode] = useState(false);
  const [list, setList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    document.body.classList.toggle("dark", darkmode);
  }, [darkmode, selectedList, list]);

  useEffect(() => {
    setSelectedList(extensions);
  }, []);

  return (
    <div className="main-container">
      <Header darkmode={darkmode} switchMode={() => setDarkmode(!darkmode)} />
      <div className="items">
        <div className="item">
          <h3> Extensions List</h3>
        </div>
        <div className="cards-container">
          {list?.map((el, index) => (
            <Card
              data={el}
              key={index}
              list={list}
              selectedList={selectedList}
              handleList={setList}
              handleSelectedList={setSelectedList}
            />
          ))}
        </div>
      </div>
      <div className="items">
        <div className="item">
          <h3>Selected Extensions List</h3>
          <div className="options">
            <button className="btn btn-all actif">All</button>
            <button className="btn btn-active">Active</button>
            <button className="btn btn-incative">Inactive</button>
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
    </div>
  );
}

export default Home;

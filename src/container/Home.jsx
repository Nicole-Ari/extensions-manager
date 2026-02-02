import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import extensions from "../data/extensionsList";
import "./home.css";
import Card from "../components/Card";
function Home(props) {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkmode);
  }, [darkmode]);

  return (
    <div className="main-container">
      <Header darkmode={darkmode} switchMode={() => setDarkmode(!darkmode)} />
      <div className="items">
        <div className="item">
          <h3> Extensions List</h3>
        </div>
        <div className="cards-container">
          {extensions?.slice(0, 3)?.map((el, index) => (
            <Card data={el} key={index} />
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
          {extensions?.map((el, index) => (
            <Card data={el} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

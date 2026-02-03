import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import extensions from "../data/extensionsList";
import "./home.css";
import { Outlet } from "react-router-dom";

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
      <Outlet context={{ list, setList, selectedList, setSelectedList }} />
    </div>
  );
}

export default Home;

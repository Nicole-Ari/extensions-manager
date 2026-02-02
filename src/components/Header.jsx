import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";
import "./header.css";
function Header({ darkmode, switchMode }) {
  return (
    <div className="header">
      <Logo width={150} />
      <button className="switch-btn" onClick={switchMode}>
        <img
          src={darkmode ? sunIcon : moonIcon}
          alt={`${darkmode ? "sun icon" : "moon icon"}`}
          width={15}
        />
      </button>
    </div>
  );
}

export default Header;

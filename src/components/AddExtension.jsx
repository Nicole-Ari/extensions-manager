import React from "react";
import Card from "./Card";
import { useNavigate, useOutletContext } from "react-router-dom";

function AddExtension() {
  const { list, setList, selectedList, setSelectedList } = useOutletContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="items">
      <div className="item">
        <h3> Extensions List</h3>
        <p onClick={handleClick}>retour</p>
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
  );
}

export default AddExtension;

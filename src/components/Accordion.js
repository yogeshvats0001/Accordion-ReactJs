// single accordion
// multiple accordion : use button to select that

import { useState } from "react";
import data from "./data";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [singled, setSingled] = useState(true);
  const [multiId, setMultiId] = useState([]);
  console.log(selected);

  const changeAccordion = () => {
    singled ? setSingled(false) : setSingled(true);
    setSelected(null);
    console.log(singled);
  };

  const handleSingleAccordion = (currentId) => {
    console.log(selected);
    setSelected(currentId === selected ? null : currentId);
    console.log(selected);
  };

  const handleMultipleAccordion = (currentId) => {
    let cpyMulti = [...multiId];
    let indexOfCurrentId = cpyMulti.indexOf(currentId);
    if(indexOfCurrentId === -1){
        cpyMulti.push(currentId);
    }else{
        cpyMulti.splice(indexOfCurrentId, 1);
    }
    setMultiId(cpyMulti);
    console.log(multiId);
  };

  return (
    <div className="wrapper">
      <div className="button">
        <button onClick={() => changeAccordion()} className="btn">
          {singled ? "Move to Multiple Accordion" : "Move to Single Accordion"}
        </button>
      </div>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  singled
                    ? () => handleSingleAccordion(dataItem.id)
                    : () => handleMultipleAccordion(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiId.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

import React, { useEffect } from "react";
import "./TableGame.css";
import { useDispatch, useSelector } from "react-redux";
import { tableAction } from "../store/tableSlice";

const TableGame = () => {
  const tableData = useSelector((state) => {
    return state.tableData;
  });
  const dispatch = useDispatch();
  const handleInput = (e) => {
    console.log(e.target.value);
    const tempArray = e.target.id.split(",");
    let payload = {
      x: Number(tempArray[0]),
      y: Number(tempArray[1]),
      value: Number(e.target.value),
    };
    dispatch(tableAction.updateArray(payload));
    console.log(payload);
  };
  console.log(tableData, "tableData");
  //
  return (
    <div className="mainTable">
      table
      {tableData.tableArray ? (
        <div>
          {tableData.tableArray.map((xElement, xIndex) => {
            return (
              <div>
                {xElement.map((yElement, yIndex) => {
                  return (
                    <input
                      value={yElement}
                      key={`${xIndex},${yIndex}`}
                      id={`${xIndex},${yIndex}`}
                      type="number"
                      onChange={handleInput}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default TableGame;

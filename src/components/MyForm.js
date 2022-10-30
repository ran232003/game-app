import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Input from "./Input";
import "./MyForm.css";
import { tableAction } from "../store/tableSlice";
const MyForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    xValue: 1,
    xValueValid: true,
    yValue: 1,
    yValueValid: true,
    sum: 0,
    sumValid: true,
  });
  const handleInput = (input, name, valid) => {
    setInputs(() => {
      return { ...inputs, [name]: input[name], [valid]: input[valid] };
    });
  };
  //   console.log(inputs, "inputs");
  const submitInput = () => {
    const payload = {
      x: Number(inputs.xValue),
      y: Number(inputs.yValue),
      sum: Number(inputs.sum),
    };
    dispatch(tableAction.setData(payload));
  };
  return (
    <div className="mainForm">
      my form
      <Input
        handleInput={handleInput}
        name="xValue"
        initValue={1}
        valid="xValueValid"
        lable="x Value"
        placeHolder="Enter x Value"
        type="number"
        errorMessage="x Value is Mandatory"
      />
      <Input
        handleInput={handleInput}
        name="yValue"
        valid="yValueValid"
        lable="y Value"
        initValue={1}
        placeHolder="Enter y Value"
        type="number"
        errorMessage="y Value is Mandatory"
      />
      <Input
        handleInput={handleInput}
        name="sum"
        valid="sumValid"
        lable="sum"
        initValue={0}
        placeHolder="Enter sum Value"
        type="number"
        errorMessage="sum Value is Mandatory"
      />
      <Button onClick={submitInput}>Submit</Button>
    </div>
  );
};

export default MyForm;

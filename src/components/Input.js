import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { checkInput } from "../helperFunctions";
import "./Input.css";
function Input(props) {
  const { type, placeHolder, lable, errorMessage, valid, name, initValue } =
    props;
  const [error, setError] = useState({
    isValid: false,
    onText: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    [name]: initValue,
    [valid]: true,
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let check = checkInput(value);
    if (check) {
      if (error.onText === true) {
        setError(() => {
          return { isValid: false, onText: true };
        });
      }
    } else {
      setError(() => {
        return { isValid: true, onText: true };
      });
    }
    setInput(() => {
      return { [name]: value, [valid]: check };
    });
    props.handleInput({ [name]: value, [valid]: check }, name, valid);
  };
  const onInput = () => {
    if (input[valid] === false) {
      setError(() => {
        return { isValid: true, onText: true };
      });
    } else {
      setError(() => {
        return { isValid: false, onText: true };
      });
    }
  };
  let iconClass =
    showPassword === false ? "fas fa-eye-slash icon" : "fas fa-eye icon";
  return (
    <div className="myInput">
      <Form>
        <Form.Label>{lable}</Form.Label>

        <Form.Control
          onChange={handleChange}
          type={type}
          placeholder={placeHolder}
          value={input[name]}
          onBlur={onInput}
          min="1"
          isInvalid={error.isValid}
        />
      </Form>
    </div>
  );
}

export default Input;

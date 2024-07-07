import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const CustomInput = ({ label, type, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form.Group controlId={rest.name}>
      {label && <Form.Label>{label}</Form.Label>}
      <InputGroup>
        <Form.Control
          type={showPassword ? "text" : type}
          {...rest}
          autoComplete="off"
        />
        {type === "password" && (
          <InputGroup.Text
            onClick={togglePasswordVisibility}
            style={{
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </InputGroup.Text>
        )}
      </InputGroup>
    </Form.Group>
  );
};

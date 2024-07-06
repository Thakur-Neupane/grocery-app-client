import { Form } from "react-bootstrap";

import React from "react";

export const CustomInput = ({ label, ...rest }) => {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...rest} />
    </Form.Group>
  );
};

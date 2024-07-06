import React from "react";
import signUpImage from "../assets/signup.gif";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../components/common/CustomInput";

const SignUp = () => {
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Sam",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Smith",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "0423456...",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Sam@email.com",
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "**********",
    },

    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "**********",
    },
  ];
  return (
    <>
      <div className="p-3 md:p-4">
        <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
          <div className="px-85 w-20 overflow-hidden rounded-full drop-shadow-md shadow-md ">
            <img src={signUpImage} alt="" className="w-full px-85 " />
          </div>

          <div className="d-flex justify-content-center align-items-center vh-100  ">
            <div className="" style={{ width: "380px" }}>
              <Form className="shadow-lg p-3 rounded  ">
                <h3 className="text-center">Sign Up Here</h3>
                {inputs.map((item, i) => (
                  <CustomInput key={i} {...item} />
                ))}

                <div className="d-grid mt-3">
                  <Button type="submit">Register New User</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

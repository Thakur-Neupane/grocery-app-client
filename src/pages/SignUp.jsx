import React from "react";
import signUpImage from "../assets/signup.gif";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/common/CustomInput";
import useForm from "../Hooks/useForm";
import { toast } from "react-toastify";
import { createNewUserAction } from "../features/users/userAction";

const SignUp = () => {
  const { form, setForm, handleOnChange } = useForm({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return toast.error("Password don't match ");
    }
    createNewUserAction(rest);
  };
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
      <div className="w-full max-w-sm  m-auto flex items-center flex-col ">
        <div className="px-85 w-20 overflow-hidden rounded-full drop-shadow-md shadow-md ">
          <img src={signUpImage} alt="" className="w-full px-85 " />
        </div>

        <div className="d-flex justify-content-center align-items-center vh-100  ">
          <div className="" style={{ width: "450px" }}>
            <Form className="shadow-lg p-3 rounded " onSubmit={handleOnSubmit}>
              <h3 className="text-center">Sign Up Here</h3>
              {inputs.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
              ))}

              <div className="d-grid mt-3">
                <Button type="submit">Register New User</Button>
              </div>

              <p className="mt-2 flex items-center">
                Already have account ?{" "}
                <Link to={"login"} className="text-red-500">
                  Login
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

import React, { useState } from "react";
import "../css/signIn.css";
import logo from "../../assets/img/Biden-crypto-rectangular.png";
import FormInput from "./FormInput.jsx";
import Footer from "./Footer";

const SignIn = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be at least 5 characters and not contain special characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{5,30}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Use a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "fullname",
      type: "text",
      placeholder: "Fullname",
      errorMessage: "Your name is empty",
      label: "Fullname",
      pattern: "^[a-zA-Z].*[\s\.]*$",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password must be at least 8 characters and include at least 1 number, 1 uppercase letter, 1 lowercase letter and 1 special character",
      label: "Password",
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password does not match",
      label: "Confirm Password",
      pattern: `${values.password}`,
      required: true,
    },
  ];

  console.log(values);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
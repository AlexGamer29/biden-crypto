import React, { useState } from "react";
import FormInput from "./FormInput.jsx";
import Hooks from "./Hooks.jsx";
import "../css/contact.css";
import { Test } from "./Test.jsx";

export const Contact = () => {

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    usePlatform: "",
    primaryResidence: "",
    language: "",
    helpList: "",
    topicRequest: "",
    detailDescription: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Fullname",
      errorMessage: "Your name is empty",
      label: "Fullname",
      pattern: "^[a-zA-Z].*[\s\.]*$",
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
  ];

  return (
    <div className="contact-content">
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}

      <Test/>
    </div>
  );
};

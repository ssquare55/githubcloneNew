import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CredContext from "../context/CredContext";
import Card from "./shared/Card";

function SingupForm() {
  const initialvalues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { Cred, signUp } = useContext(CredContext);

  let navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      signUp(formValues);
      navigate("/");
    }
    setIsSubmit(false);
  }, [isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regexUsername = /^[a-z0-9]{2,10}$/;
    const regexMail = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,5}$/;
    const regexPassword = /^[a-z0-9]{2,10}$/;
    if (!values.username) {
      errors.username = "username is required";
    } else if (!regexUsername.test(values.username)) {
      errors.username =
        "username can contain small letters,and number the length should be btw 2 to 10";
    } else if (Cred.find((cred) => cred.username === values.username)) {
      errors.username = "username already exists";
    }

    if (!values.email) {
      errors.email = "email is required";
    } else if (!regexMail.test(values.email)) {
      errors.email = "email format is invalid";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (!regexPassword.test(values.password)) {
      errors.password =
        "password can contain small letters,and number the length should be btw 2 to 10";
    }
    return errors;
  };

  return (
    <Card>
      {/* <pre>{JSON.stringify(formValues)}</pre> */}
      {Object.keys(formErrors).length === 0 && isSubmit && (
        <p className="text-success">Submitted</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="InputUsername">Username</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="username"
            id="InputUsername"
            value={formValues.username}
            placeholder="Username"
          />
        </div>
        <p className="text-danger">{formErrors.username}</p>
        <div className="form-group">
          <label htmlFor="InputEmail1">Email address</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="email"
            id="InputEmail1"
            value={formValues.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <p className="text-danger">{formErrors.email}</p>
        <div className="form-group">
          <label htmlFor="InputPassword1">Password</label>
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            name="password"
            value={formValues.password}
            id="InputPassword1"
            placeholder="Password"
          />
        </div>
        <p className="text-danger">{formErrors.password}</p>
        <div className="container mt-3 " style={{ width: "100%" }}>
          <button
            type="submit"
            className="btn btn-success"
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
}

export default SingupForm;

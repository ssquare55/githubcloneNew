import React, { useContext, useEffect, useState } from "react";
import CredContext from "../context/CredContext";
import Card from "./shared/Card";

function SinginForm() {
  const initialvalues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { signIn } = useContext(CredContext);

  const handleChange = (e) => {
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
      signIn(formValues);
    }
    setIsSubmit(false);
  }, [isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regexUsername = /^[a-zA-Z0-9]{2,10}$/;
    const regexPassword = /^[a-zA-Z0-9]{2,10}$/;
    if (!values.username) {
      errors.username = "username is required";
    } else if (!regexUsername.test(values.username)) {
      errors.username =
        "username can contain capital,small,and length should be btw 2 to 5";
    }

    if (!values.password) {
      errors.password = "password is required";
    } else if (!regexPassword.test(values.password)) {
      errors.password =
        "password can contain capital,smallletter,and length should be btw 2 to 5";
    }
    return errors;
  };

  return (
    <Card>
      {/* <pre>{JSON.stringify(formValues)}</pre> */}
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

export default SinginForm;

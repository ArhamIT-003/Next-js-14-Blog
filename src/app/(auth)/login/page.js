"use client";
import React from "react";
import classes from "./page.module.css";

const Login = () => {
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // Destructure the name and value from the event target
    const { name, value } = e.target;
    // Update the state using the spread operator
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in...");
  };
  return (
    <div className={classes.container}>
      <h1>Login</h1>
      <form className={classes.main} onClick={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={login.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={login.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

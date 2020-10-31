import React, { useState } from "react";

const EmailVerificationComponent = () => {
  const [inputEmail, setInputEmail] = useState("");
  const handleChange = (e) => {
    setInputEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/ajit`, {
      method: "get",
      mode: "cors",
      Get: "/users",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="emailInput">Enter Email</label>
      <input
        type="text"
        id="emailInput"
        value={inputEmail}
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  );
};
export default EmailVerificationComponent;

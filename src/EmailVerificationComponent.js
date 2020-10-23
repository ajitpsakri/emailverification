import React, { useState } from "react";

const EmailVerificationComponent = () => {
  const [inputEmail, setInputEmail] = useState();
  const handleChange = (e) => {
    setInputEmail(e.target.value);
  };
  let key = "RMOAD7L9PEIZMV5ZS2CK";
  const handleSubmit = () => {
    fetch(
      `https://api.mailboxvalidator.com/v1/validation/single?email=${inputEmail}&key=${key}`
    )
      .then((resp = resp.json()))
      .then((data) => console.log(data));
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

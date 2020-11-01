import React, { useState } from "react";
// import axios from "axios";
const EmailVerificationComponent = () => {
  const [inputEmail, setInputEmail] = useState("");
  const handleChange = (e) => {
    setInputEmail(e.target.value);
  };
  let key = "RMOAD7L9PEIZMV5ZS2CK";
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.mailboxvalidator.com/v1/validation/single?email=${inputEmail}&key=${key}`,
      {
        method: "get",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    // axios
    //   .all([
    //     axios.get(
    //       `https://cors-anywhere.herokuapp.com/https://api.mailboxvalidator.com/v1/validation?email=${inputEmail}&key=${key}`
    //     ),
    //     {
    //       origin: "https://api.mailboxvalidator.com/v1/validation",
    //     },
    //   ])
    //   .then((resp) => console.log(resp));
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

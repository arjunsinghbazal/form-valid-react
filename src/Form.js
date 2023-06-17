import React, { useState } from "react";

const Form = () => {
  ///for updating values in input
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  ////for check validation of form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password === "" || confirmPassword === "" || fullname === "" || email === "") {
      setMessage("Error: All fields are mandatory");
    } else if (password === confirmPassword) {
      setMessage("Successfully Sign up!");
      setFullname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setMessage("Error: Password Mismatch");
    }
  };

  ////return the form with inputs
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h1>Signup</h1>
      <input className="items" type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
      <input className="items" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="items" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} />
      <input className="items" onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" value={confirmPassword} />
      <p className={message.includes("Error") ? "red" : "green"}>{message}</p>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Form;

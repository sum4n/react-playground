import { useState } from "react";

function Person() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <Input
        label="First Name: "
        text={firstName}
        handleChange={handleFirstName}
      />
      <Input
        label="Last Name: "
        text={lastName}
        handleChange={handleLastName}
      />
      <p>
        {firstName} {lastName}
      </p>
    </>
  );
}

function Input({ label, text, handleChange }) {
  return (
    <label>
      {label}
      <input value={text} onChange={handleChange} />
    </label>
  );
}

export default Person;

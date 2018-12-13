import React from 'react'

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <header>
      <div className="slim-strip">
        <center><b>Do you want to receive notifications when a new article is posted?</b></center>
        <br />
        <input
          ref={node => (name = node)}
          type="text"
          placeholder="Your First Name"
        />
        <br />
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="Your Email"
        />
        <br />
        <button onClick={submit}>
          SUBMIT
        </button>
      </div>
    </header>
  );
};

export default CustomForm

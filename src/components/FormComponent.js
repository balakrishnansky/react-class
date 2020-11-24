import React from "react";

function FormComponent(props) {
  console.log(props);
  return (
    <main>
      <form>
        <input
          type="text"
          value={props.firstName}
          placehoder="First Name"
          name="firstName"
          onChange={props.onChange}
        />
        <input
          type="text"
          value={props.lastName}
          placehoder="Last Name"
          name="lastName"
          onChange={props.onChange}
        />
        <input
          type="text"
          value={props.age}
          placehoder="Age"
          name="age"
          onChange={props.onChange}
        />
      </form>
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
    </main>
  );
}

export default FormComponent;

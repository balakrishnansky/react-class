import React from "react";

const Header = props => {
  return (
    <header>
      <h2> Total Todo's {props.tasks.length}</h2>
    </header>
  );
};

export default Header;

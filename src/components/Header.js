import React from "react";

const Header = props => {
  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        {" "}
        Total Todo's {props.tasks.length}
      </h1>
    </div>
  );
};

export default Header;

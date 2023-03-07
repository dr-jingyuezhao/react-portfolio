import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron px-5 py-5">
      <div className="container-fluid">
        <div className="row">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

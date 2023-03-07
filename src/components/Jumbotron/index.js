import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron px-5">
      <div className="container h-100">
        <div className="row h-100">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

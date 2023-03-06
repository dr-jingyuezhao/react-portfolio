import React from 'react';
import './style.css';

function Jumbotron(props) {
  return (
    <div>
      <div className="jumbotron">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col my-auto text-center">
              <div className="mx-auto">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

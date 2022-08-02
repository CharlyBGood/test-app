import React from "react";
import "../stylesheets/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="container-test">
      <img
        className="img-test"
        src={require(`../img/test-${props.img}.png`)}
        alt= {props.name} 
      />
      <div className="container-txt-test">
        <p className="name-test">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="job-test">
          {props.job} at <strong>{props.company}</strong>
        </p>
        <p className="txt-test">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimonio;

import React from "react";
import "../stylesheets/Testimonio.css";


function Testimonio() {
  return (
    <div className="container-test">
      <img
        className="img-test"
        src={require("../img/test-emma.png")}
        alt="Foto de Emma"
      />
      <div className="container-txt-test">
        <p className="name-test">Emma Bostian in Sweden</p>
        <p className="job-test">Software Engineer at Spotify</p>
        <p className="txt-test">
          "I've always struggled with learning JavaScript. I've taken many
          courses but freeCodeCamp's course was the one which stuck. Studying
          JavaScript as well as data structures and algorithms on freeCodeCamp
          gave me the skills and confidence I needed to land my dream job as a
          software engineer at Spotify."
        </p>
      </div>
    </div>
  );
}


export default Testimonio;
import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i class="fab fa-internet-explorer"></i>
          <span>Internet</span>
        </li>
        <li className="hobby">
          <i className="fas fa-music"></i>
          <span>Piano et guitare</span>
        </li>
        <li className="hobby">
          <i className="fas fa-book"></i>
          <span>Lecture</span>
        </li>
        <li className="hobby">
          <i class="fas fa-microscope"></i>
          <span>Science et technologies</span>
        </li>
        <li className="hobby">
          <i class="fas fa-heartbeat"></i>
          <span>Yoga</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;

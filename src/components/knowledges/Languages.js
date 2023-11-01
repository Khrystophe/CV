import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 2 },
      { id: 2, value: "Css", xp: 2 },
      { id: 3, value: "Php", xp: 2 },
      { id: 4, value: "SQL", xp: 2 },
      { id: 5, value: "Dart", xp: 1 },
    ],
    frameworks: [
      { id: 2, value: "Bootstrap", xp: 1.5 },
      { id: 8, value: "Flutter", xp: 1 },
      { id: 3, value: "Sass", xp: 1 },
      { id: 1, value: "React Js", xp: 0.5 },
      { id: 4, value: "Gsap", xp: 0.5 },
      { id: 5, value: "Barba.js", xp: 0.5 },
      { id: 6, value: "Symfony", xp: 0.25 },
      { id: 9, value: "React Native", xp: 0.25 },
      { id: 7, value: "Ionic", xp: 0.25 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languageDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworkDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;

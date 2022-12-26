import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1.8 },
      { id: 2, value: "Css", xp: 2 },
      { id: 3, value: "Php", xp: 0.7 },
      { id: 14, value: "Java", xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.4 },
      { id: 2, value: "Bootstrap", xp: 2 },
      { id: 3, value: "Sass", xp: 1.5 },
      { id: 14, value: "Material", xp: 0.5 },
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

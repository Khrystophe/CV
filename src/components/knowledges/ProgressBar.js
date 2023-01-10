import React from "react";

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Expérience</span>
        <span>6 mois</span>
        <span>1 an</span>
      </div>

      <div>
        {props.languages.map((item) => {
          let xpYears = 1.1;
          let progressBar = (item.xp / xpYears) * 100 + "%";
          return (
            <div key={item.id} className="languagesList">
              <div className="height">
                <div className="sixMonths">
                  <div className="oneYear">
                    <li>{item.value}</li>
                  </div>
                </div>
              </div>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;

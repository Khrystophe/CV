import React from "react";
import Navigation from "../components/Navigation";
import Languages from "../components/knowledges/Languages";
import Experience from "../components/knowledges/Experience";
import OtherSkills from "../components/knowledges/OtherSkills";
import Hobbies from "../components/knowledges/Hobbies";
import Education from "../components/knowledges/Education";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <Education />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;

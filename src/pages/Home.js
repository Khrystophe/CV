import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Christophe Meckler</h1>
          <h2>Développeur Web / Web Mobile</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              <span>
                <i class="fas fa-download"></i> Mon CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

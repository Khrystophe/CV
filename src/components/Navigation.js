import React from "react";
import { NavLink } from "react-router-dom";

const selected = ({ isActive }) => (isActive ? "selected_link" : "");
const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/portrait.jpg" alt="profil-pic"></img>
          <h3>Christophe Meckler</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/" className={selected}>
              <i className="fas fa-home">
                <span> Accueil</span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/competences" className={selected}>
              <i className="fas fa-mountain">
                <span>Compétences</span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={selected}>
              <i className="fas fa-image">
                <span> Portfolio</span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={selected}>
              <i className="fas fa-address-book">
                <span> Contact</span>
              </i>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://fr.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>

        <div className="signature">
          <p>Christophe Meckler - 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

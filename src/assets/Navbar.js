import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Affichage from "../components/affichage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Logo from "./images/logo.png";
function BarreNav(props) {
  useEffect(() => {
    <BarreNav />;
  }, [localStorage.getItem("token")]);
  // Vérifiez si la propriété lastname est disponible

  return (
    <div className="Nav">
      <nav>
        <div className="flex4">
          <Link to="/">
            <img className="logo" src={Logo} alt="cover" />

            <button className="btn">Home</button>
          </Link>
          {localStorage.getItem("token") !== null ? (
            <Link to="/profil">
              <button className="btn">
                Profil <FontAwesomeIcon icon={faUser} />
              </button>
            </Link>
          ) : null}
          <p>
            <Affichage />
          </p>
        </div>
      </nav>
    </div>
  );
}

export default BarreNav;

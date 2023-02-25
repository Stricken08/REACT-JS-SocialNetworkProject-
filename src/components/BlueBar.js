import "./blueBar.css";
import Inscription from "../assets/view/Inscription";
import { useState, useEffect } from "react";
import Login from "../assets/view/Login";

function BlueBar() {
  const [displayInscription, setdisplayInscription] = useState(false);
  const [displayLogin, setdisplayLogin] = useState(false);
  const toggleInscription = () => {
    setdisplayInscription(!displayInscription);
  };
  const toggleLogin = () => {
    setdisplayLogin(!displayLogin);
  };
  const hideInscription = () => {
    setdisplayInscription(false);
  };

  const token = localStorage.getItem("token"); // récupère le token du local storage
  const bottomStyle = token ? "-8.7vh" : "0"; // détermine la valeur de la propriété CSS bottom

  return (
    <div className="blueBar" style={{ bottom: bottomStyle }}>
      {" "}
      {/* utilise la valeur de bottomStyle */}
      <div className="theButtons">
        <button onClick={toggleLogin} className="connectButton">
          Se connecter
        </button>
        <button onClick={toggleInscription} className="createButton">
          S'inscrire
        </button>
      </div>
      {/* popUp inscription et login */}
      <div>
        {displayInscription && <Inscription onClose={hideInscription} />}
      </div>
      <div>{displayLogin && <Login />}</div>
    </div>
  );
}

export default BlueBar;

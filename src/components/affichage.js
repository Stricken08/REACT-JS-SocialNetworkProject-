import React, { useState, useEffect } from "react";

function Affichage() {
  const token = localStorage.getItem("token");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  async function afficherProfil() {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    };

    let reponse = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/communitize/user`,
      options
    );
    let donnees = await reponse.json();
    setFirstname(donnees.firstname);
    setLastname(donnees.lastname);
   
  }

  useEffect(() => {
    afficherProfil();
  }, []);

  return (
    <div className="afficheprofil4">
      <h5>{firstname}</h5>

      <h5>{lastname}</h5>
    </div>
  );
}

export default Affichage;

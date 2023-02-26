import React, { useState, useEffect } from "react";

import BarreNav from "../assets/Navbar";
function Info() {
  const token = localStorage.getItem("token");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  async function afficherProfil() {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    };

    let reponse = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/communitizeFinal/user`,
      options
    );
    let donnees = await reponse.json();
    setFirstname(donnees.firstname);
    setLastname(donnees.lastname);
    setEmail(donnees.email);
    setAge(donnees.age);
    setOccupation(donnees.occupation);
  }

  useEffect(() => {
    afficherProfil();
  }, []);

  return (
    <div className="afficheprofil3">
      <BarreNav firstname={firstname} lastname={lastname} />
      <h2>PRENOM </h2>
      <h3>{firstname}</h3>
      <h2>NOM</h2>
      <h3>{lastname}</h3>
      <h2>mail </h2>
      <h3>{email}</h3>
      <h2>age</h2>
      <h3>{age}</h3>
      <h2>occupation</h2>
      <h4>{occupation}</h4>
    </div>
  );
}

export default Info;

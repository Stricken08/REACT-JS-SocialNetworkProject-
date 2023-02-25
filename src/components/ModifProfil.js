import React, { useState, useEffect } from "react";
import BarreNav from "../assets/Navbar";
import Info from "./Profil";
function ModifProfil() {
  const token = localStorage.getItem("token");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [data, setData] = useState({
    //objet qui va recuperer les valeurs d'inputs pour les balancer dans le fetch
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    occupation: "",
  });
  const handleChange = (key) => (e) => {
    if (key === "firstname") {
      setFirstname(e.target.value);
    } else if (key === "lastname") {
      setLastname(e.target.value);
    } else if (key === "email") {
      setEmail(e.target.value);
    } else if (key === "age") {
      setAge(e.target.value);
    } else if (key === "occupation") {
      setOccupation(e.target.value);
    }
  };
  async function afficherProfil() {
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        age: data.age,
        occupation: data.occupation,
      }),
    };

    let reponse = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/communitize/user`,
      options
    );
    let donnees = await reponse.json();
    setFirstname(donnees.firstname);
    setLastname(donnees.lastname);
    setEmail(donnees.email);
    setAge(donnees.age);
    setOccupation(donnees.occupation);
    console.log("je suis donnee", donnees);
  }
  useEffect(() => {
    afficherProfil();
  }, []);

  return (
    <div className="flex">
      <BarreNav />
      <div className="create3">
        <form action="">
          <input
            onChange={handleChange("firstname")}
            placeholder="Prénom"
            type="text"
          />
          <input
            onChange={handleChange("lastname")}
            placeholder="Nom"
            type="text"
          />

          <input
            onChange={handleChange("email")}
            placeholder="Adresse Mail"
            type="text"
          />
          <input onChange={handleChange("age")} placeholder="age" type="text" />
          <input
            onChange={handleChange("occupation")}
            placeholder="Occupation"
            type="text"
          />
          {/* pb pour required si evenement click */}
          <button onClick={afficherProfil} type="submit">
            MODIFIER
          </button>
        </form>
      </div>
      <Info />
    </div>
  );
}

export default ModifProfil;

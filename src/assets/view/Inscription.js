import React from "react";
import { useState } from "react";
import "./inscription.css";

function Inscription(props) {
  //composant qui va apparaitre dans Home sous forme de Pop Up
  const [data, setData] = useState({
    //objet qui va recuperer les valeurs d'inputs pour les balancer dans le fetch
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState("");
  const handleChange = (key) => (e) => {
    setData({ ...data, [key]: e.target.value });
  };

  async function handleClick(event) {
    event.preventDefault();

    await fetch(
      "https://social-network-api.osc-fr1.scalingo.io/communitizeFinal/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          firstname: data.name,
          lastname: data.surname,
        }),
      }
    )
      .then(async (response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);

        const validationText = document.querySelector(".validation"); //affichage creation du compte au click;
        setValidation("Compte crée !");
        validationText.style.opacity = 1; // apparition de Validation a l'ecran
        validationText.style.left = "42%";
        setTimeout(() => {
          validationText.style.opacity = 0;
          props.onClose();
        }, 1500);
      });
  }

  //fermeture de la popup d'inscription
  const [displayInscription, setdisplayInscription] = useState(true);
  const toggleInscription = () => {
    setdisplayInscription(!displayInscription);
  };

  return (
    <div className="flex">
      <div className="create">
        <button onClick={props.onClose} className="x">
          x
        </button>
        <form action="">
          <h2>Créer votre compte</h2>

          <input
            required
            onChange={handleChange("name")}
            placeholder="Prénom"
            type="text"
          />
          <input
            required
            onChange={handleChange("surname")}
            placeholder="Nom"
            type="text"
          />
          <p>Cette information ne sera pas affichée publiquement</p>
          <input
            required
            onChange={handleChange("email")}
            placeholder="Adresse Mail"
            type="text"
          />
          <input
            required
            onChange={handleChange("password")}
            placeholder="Mot de passe"
            type="text"
          />
          {/* pb pour required si evenement click */}
          <button onClick={handleClick} type="submit">
            Valider
          </button>
        </form>
      </div>
      <div className="validation">{validation}</div>
    </div>
  );
}
export default Inscription;

import React from "react";
import { useState } from "react";

function PublishPost() {
  const token = localStorage.getItem("token");
  //composant qui va apparaitre dans Home sous forme de Pop Up
  const [data, setData] = useState({
    //objet qui va recuperer les valeurs d'inputs pour les balancer dans le fetch
    title: "",
    content: "",
  });

  const [validation, setValidation] = useState("");
  const handleChange = (key) => (e) => {
    setData({ ...data, [key]: e.target.value });
  };

  function handleClick(event) {
    event.preventDefault();

    fetch("https://social-network-api.osc-fr1.scalingo.io/communitize/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        title: data.title,
        content: data.content,
      }),
    }).then(() => {
      //ensuite
      const validationPost = document.querySelector(".validationPost"); //affichage creation du compte au click;
      setValidation("Post !");
      validationPost.style.opacity = 1; // apparition de Validation a l'ecran
      validationPost.style.left = "42%";
      setTimeout(() => {
        validationPost.style.opacity = 0;
      }, 1500);
    });
  }

  return (
    <div className="flex comment">
      <div className="formulairePost">
        <form action="">
          <input
          className="inputTitle"
            required
            onChange={handleChange("title")}
            placeholder="Nom de vote Post"
            type="text"
          />
          <input
            className="content"
            required
            onChange={handleChange("content")}
            placeholder="Partager votre contenu"
            type="text"
          />

          {/* pb pour required si evenement click */}
          <button className="orangeButton" onClick={handleClick} type="submit">
            Publier
          </button>
        </form>
      </div>

      <div className="validationPost">{validation}</div>
      {console.log(token)}
    </div>
  );
}

export default PublishPost;

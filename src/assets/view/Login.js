import React, { useState } from "react";
import "./login.css";

function Login() {
  const [showBlueBar, setShowBlueBar] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (key) => (e) => {
    setData({ ...data, [key]: e.target.value });
  };

  function handleClick() {
    fetch("https://social-network-api.osc-fr1.scalingo.io/communitizeFinal/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then(async (response) => {
      const responseData = await response.json();
      const token = responseData.token;

      if (!token) {
        alert("Vos informations d'identification sont incorrectes.");
        return;
      }

      localStorage.setItem("token", token);
      window.location.reload();
    });
  }

  return (
    <div className="flex">
      <div className="create">
        <h2>Connecte toi</h2>

        <input
          type="email"
          placeholder="email"
          value={data.email}
          onChange={handleChange("email")}
        ></input>

        <input
          type="text"
          placeholder="Mdp"
          value={data.password}
          onChange={handleChange("password")}
        ></input>

        <button onClick={handleClick} className="valider">
          Se Connecter
        </button>
      </div>
    </div>
  );
}

export default Login;

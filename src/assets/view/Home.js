import React from "react";
import PublishPost from "./PublishPost";
import BlueBar from "../../components/BlueBar";
import Post from "./Post";
import cover from "../images/building.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import BarreNav from "../Navbar";
import BootstrapCarousel from "../../components/BootstrapCarousel";
import Logo from "../images/logo.png";
function Home() {
  function disconnect() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  const token = localStorage.getItem("token");

  return (
    <div className="center">
      <div className="barnav">
        <BarreNav />{" "}
        <button onClick={disconnect}>
          Deconnexion
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
      <img className="cover" src={cover} alt="cover" />

      <div>
        {" "}
        <PublishPost />
      </div>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="homeCarousel">
        <BootstrapCarousel />
      </div>
      <div>
        <Post />
      </div>
      <div>
        <BlueBar />
      </div>
    </div>
  );
}

export default Home;

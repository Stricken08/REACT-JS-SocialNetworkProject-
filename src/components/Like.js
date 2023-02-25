import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

function Like(props) {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(0);

  function click() {
    fetch(
      "https://social-network-api.osc-fr1.scalingo.io/communitize/post/like",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          postId: props.postId,
        }),
      }
    ).then((response) => response.json());
    setData(data + 1);
  }

  return (
    <div>
      <button onClick={click} className="bouttonLike">
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
    </div>
  );
}

export default Like;

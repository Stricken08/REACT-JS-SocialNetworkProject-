import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

function Comment(props) {
  const token = localStorage.getItem("token");

  const [data, setData] = useState({
    content: "",
  });

  const handleChange = (key) => (e) => {
    setData({ ...data, [key]: e.target.value });
  };

  function handleClick(event) {
    console.log(data);
    event.preventDefault();

    fetch(
      "https://social-network-api.osc-fr1.scalingo.io/communitize/post/comment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          postId: props.postId,
          content: data.content,
        }),
      }
    ).then(() => {
      setData({ content: "" });
    });
  }

  return (
    <div className="flex">
      <div className="">
        <form action="">
          <h2>Commenter</h2>

          <input
            required
            onChange={handleChange("content")}
            placeholder="Lâche ton COM !"
            type="text"
            value={data.content}
          />

          <button className="orangeButton" onClick={handleClick} type="submit">
            <FontAwesomeIcon icon={faComment} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comment;

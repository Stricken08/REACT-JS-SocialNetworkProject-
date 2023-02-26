import React, { useState, useEffect } from "react";
import Like from "../../components/Like";
import Comment from "../../components/Comment";

import Profil from "../../components/Profil";

function Post(props) {
  const [post, setPost] = useState([]);
  const [nbLike, setNbLike] = useState([]);
  const [comm, setCom] = useState([]);
  useEffect(() => {
    async function ajouterPost() {
      let options = {
        method: "GET",
      };
      let reponse = await fetch(
        `https://social-network-api.osc-fr1.scalingo.io/communitize/posts`,
        options
      );
      let donnees = await reponse.json();
      setPost(donnees.posts);
      setNbLike(donnees.posts.map((post) => post.likes.length));
      setCom(donnees.posts.map((post) => post.comment));
    }
    ajouterPost();
  }, [nbLike]);

  return (
    <div className="post">
      {post.map((objet, index) => (
        <div className="onePost" key={index}>
          <h3>{objet.title}</h3>
          <p >
            {objet.content} <br />
          </p>
          <div className="like">
            <Like postId={objet._id} />

            <p>{nbLike[index]}</p>
          </div>
          <Comment postId={objet._id} />

          {objet.comments.map((objet, index) => (
            <div key={index} className="commentaire">
              <div className="nomPrenom">
                <p>{objet.firstname}</p>
                <p>{objet.lastname}</p>
              </div>
              <p>{objet.content}
                </p>
            
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Post;

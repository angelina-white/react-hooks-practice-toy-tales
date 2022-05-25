import React from "react";
import {useState} from "react"

function ToyCard({toy, removeToy, newLikes}) 
{
  const {id, name, image, likes} = toy

  function onDelete()
  {
    fetch(`http://localhost:3001/toys/${id}`,
    {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => 
    {
      removeToy(id)
    })
  }


  const [likesNum, setLikesNum] = useState(likes + 1)
  function onLike()
  {
    setLikesNum(likesNum => likesNum+1)

    const newObj = {likes: likesNum}

    fetch(`http://localhost:3001/toys/${id}`,
    {
      method: "PATCH",
      headers:
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
    .then(resp => resp.json())
    .then((data) => 
    {
      newLikes(data)
    })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" value={likes} onClick={onLike}>Like {"<3"}</button>
      <button className="del-btn" value={id} onClick={onDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

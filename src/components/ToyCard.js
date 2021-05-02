import React, { useState } from "react";

function ToyCard({toy, onToyClick, onLikeUpdate}) {
  const [likes, setLikes]=useState('')
  // console.log(toy)

  function handleDonate(){

    fetch(`http://localhost:3001/toys/${toy.id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => console.log(data))
    onToyClick(toy)
  }

  function handleLikes(e){
    setLikes(e.target.value)

    const updatedLikes = {
      likes: toy.likes + 1 
    }
      

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedLikes)
    })
    .then(res => res.json())
    .then(updatedLike => {
      onLikeUpdate(updatedLike)
    })
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" value={toy.likes} onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

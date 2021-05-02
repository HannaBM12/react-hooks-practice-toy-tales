import React, { useState } from "react";

function ToyForm({onAddNewToy}) {
  const[toyName, setToyName] = useState('')
  const[toyImage, setToyImage] = useState('')

  function handleName(e){
    setToyName(e.target.value)
  }

  function handleImage(e){
    setToyImage(e.target.value)
  }

  function handleFormSubmit(e){
    e.preventDefault()

    const newToy = {
      name: toyName,
      image: toyImage,
      likes: 0
    }
    
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(toyData => {
      onAddNewToy(toyData)
    })


  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={toyName}
          onChange={handleName}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={toyImage}
          onChange={handleImage}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

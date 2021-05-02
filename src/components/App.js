import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=>{
      fetch('http://localhost:3001/toys')
      .then(res => res.json())
      .then(toyData => {
          setToys(toyData)
      })
  }, [])

  function addNewToy(toyObj){
    setToys([...toys], toyObj)
  }

  function removeToy(donatedToy){
    const filteredToys = toys.filter(toy => {
      return toy.id !== donatedToy.id
    })
    setToys(filteredToys)
  }

  function updateToy(likedToy){
    const updatedToys = toys.map(toy => 
       toy.id === likedToy.id ? likedToy : toy
    )
      setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onRemoveToy={removeToy} onUpdateToy={updateToy}/>
    </>
  );
}

export default App;

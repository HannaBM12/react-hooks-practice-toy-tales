import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onRemoveToy, onUpdateToy}) {

  // console.log(toys)

  
  const toyDetails = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} onToyClick={onRemoveToy} onLikeUpdate = {onUpdateToy} />
  })

  return (
    <div id="toy-collection">{toyDetails} </div>
  );
}

export default ToyContainer;

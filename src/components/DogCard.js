import React from "react";

function DogCard( {dogData} ) {
  return (
    <div className="class-body">
        <img src={dogData.image} alt={dogData.image} />
        <div className="dogs-name"> <h3>{dogData.name}</h3> </div>
        <p>Breed: {dogData.breed}</p>
    </div>
  );
}


export default DogCard;
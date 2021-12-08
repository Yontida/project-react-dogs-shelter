import React, { useState } from "react";


function DogCard( {dogData} ) {

const [ isInShelter, setIsInShelter ] = useState(true);

function handleToggleAdopt() {
  setIsInShelter( (isInShelter ) => !isInShelter )
}


  return (
    <div className="class-body">
        <img src={dogData.image} alt={dogData.name} />
        <h3>{dogData.name}</h3>
        <p>Breed: {dogData.breed}</p>
        <p>Size: {dogData.size}</p>
        <p>age: {dogData.age}</p>

        {isInShelter ? (
        <button className="primary" onClick={handleToggleAdopt}>
          In Shelter
        </button>
      ) : (
        <button onClick={handleToggleAdopt}>Adopted</button>
      )}

    </div>
  );
}


export default DogCard;


// "id": 1,
//      "name": "Percy",
//      "image": "https://www.bluemoonmeadows.org/2019-dogs/bennie.jpg",
//      "breed": "Beagle",
//      "size": "Medium",
//      "age": "3",
//      "foster": true,
//      "adopted": false
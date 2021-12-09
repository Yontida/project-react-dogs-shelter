import React from "react";

function FosterCard( { fosterData } ) {
  return (
    <div className="foster-card">

        <img src={fosterData.image} alt={fosterData.name} />
        <h3>{fosterData.name}</h3>
        <p>Breed: {fosterData.breed}</p>
        {/* <p>Size: {fosterData.size}</p>
        <p>age: {fosterData.age}</p> */}
      

    </div>
  );
}



export default FosterCard;
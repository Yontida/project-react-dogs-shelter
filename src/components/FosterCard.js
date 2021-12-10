import React from "react";

function FosterCard( { fosterData } ) {
  return (
    
    <div className="card">

        <img src={fosterData.image} alt={fosterData.name} />
        <h3>{fosterData.name}</h3>
        <p>Breed: {fosterData.breed}</p>
        <p>Foster Family: {fosterData.fosterby}</p>
        <p>Contact: {fosterData.contact}</p>
        
      
    </div>
  );
}



export default FosterCard;
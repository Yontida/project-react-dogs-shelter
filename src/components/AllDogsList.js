import React from "react";
import DogCard from "./DogCard";

function AllDogsList( {dogs} ) {
  return (
    <div >
      <div className="all-dogs-header"> <h2>All DOGS</h2> </div>

      {dogs.map( (eachDogObj) => 
        
        <DogCard 
            key={eachDogObj.id}
            dogData={eachDogObj}
        />
      
        )}

    </div>
  );
}


export default AllDogsList;
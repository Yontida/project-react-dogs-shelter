import React from "react";
import DogCard from "./DogCard";

function AllDogsList( { dogs } ) {



  return (

    <div>
      <div className="route-header"> <h2>All DOGS</h2> </div>

      <label htmlFor="phase">Status : </label>
        <select onChange={(event) => console.log("Choose status")}
        >
          <option value="true">In Shelter</option>
          <option value="false">Adopted</option>
        </select>

      <div>
      {dogs.map( (eachDogObj) => 

        <DogCard 
            key={eachDogObj.id}
            dogData={eachDogObj}

        />
      
        )}
      </div>
    </div>
  );
}


export default AllDogsList;
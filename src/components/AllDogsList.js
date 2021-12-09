import React from "react";
import DogCard from "./DogCard";
import SearchBar from "./SearchBar";

function AllDogsList( { dogs } ) {



  return (

    <div>
      <div className="route-header"> <h2>All DOGS</h2> </div>


      {/* FIlter bar */}
      {/* <label htmlFor="phase">Status : </label>
        <select onChange={(event) => console.log("Choose status")}
        >
          <option value="true">In Shelter</option>
          <option value="false">Adopted</option>
        </select> */}

       <SearchBar /> 

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
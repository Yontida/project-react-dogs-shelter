import React from "react";
import DogCard from "./DogCard";
import SearchBar from "./SearchBar";

function AllDogsList( { dogs, handleDeleteDog } ) {



  return (

    <div>
      <div className="route-header"> <h2>All Dogs Available For Adoption</h2> </div>


      {/* FIlter bar */}
      {/* <label htmlFor="phase">Status : </label>
        <select onChange={(event) => console.log("Choose status")}
        >
          <option value="true">In Shelter</option>
          <option value="false">Adopted</option>
        </select> */}
      
      <div className="search-bar">
       <SearchBar /> 
      </div>

        <div className="dog-container">
          {dogs.map( (eachDogObj) => 

            <DogCard 
                key={eachDogObj.id}
                dogData={eachDogObj}
                deleteDogRequest={handleDeleteDog}
            />
            )}

        </div>

      </div>
  );
}


export default AllDogsList;
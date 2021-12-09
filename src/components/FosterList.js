import React from "react";
import FosterCard from "./FosterCard";

function FosterList( {fosters} ) {
  return (
    <div >
      <div className="route-header"> <h2>Dogs Available For Foster</h2> </div>

      {fosters.map( (eachDogObj) => 

      <FosterCard 
          key={eachDogObj.id}
          fosterData={eachDogObj}
      />
      )}
      

    </div>
  );
}



export default FosterList;
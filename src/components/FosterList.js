import React from "react";
import FosterCard from "./FosterCard";

function FosterList( {fosters} ) {
  return (
    <div >
      <div className="route-header"> <h2>Dogs In Foster Home</h2> </div>

      <div className="dog-container">
      {fosters.map( (eachDogObj) => 

      <FosterCard 
          key={eachDogObj.id}
          fosterData={eachDogObj}
      />
      )}
      </div>

    </div>
  );
}



export default FosterList;
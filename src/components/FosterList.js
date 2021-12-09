import React from "react";
import FosterCard from "./FosterCard";

function FosterList( {fosters} ) {
  return (
    <div >
      <div className="route-header"> <h2>Dogs In Foster Home</h2> </div>

      <ul className="cards">
      {fosters.map( (eachDogObj) => 

      <FosterCard 
          key={eachDogObj.id}
          fosterData={eachDogObj}
      />
      )}
      </ul>

    </div>
  );
}



export default FosterList;
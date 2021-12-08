import React, { useEffect, useState } from "react";
import AllDogsList from "./AllDogsList";


function DogMainContainer() {

  const [ dogs, setDogs ] = useState( [] )
  console.log("STATE of dogs: ", dogs)

  const baseURL = "http://localhost:3000/dogs"


useEffect( () => {

  fetch(baseURL)
  .then( r => r.json() )
  .then( 
    ( fetchedData ) => {
        setDogs( fetchedData ) 
    } 
  )
}, [])


// function randeringAllDogs () {
//   dogs.map( 
    
  //   (eachDogObj) => {

  //   return eachDogObj.name
  // } )

// }


  return (
    <div >

      <AllDogsList 
          dogs={dogs}
      />


    </div>
  );
}


export default DogMainContainer;
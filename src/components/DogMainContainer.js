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

      <h2>Hey - testing DogMainContainer</h2>
      <br></br>

      {/* <AllDogsList 
          dogs={dogs}
      /> */}

        {dogs.map( (eachDogObj) => {


        return (
          <>
        <h5>{eachDogObj.name}</h5>
        <img src={eachDogObj.image} />
        </>
        )

        }
        )}


    </div>
  );
}


export default DogMainContainer;
import React, { useEffect, useState } from "react";
import AllDogsList from "./AllDogsList";
import AddNewDogForm from "./AddNewDogForm";
import FosterList from "./FosterList";


function DogMainContainer() {

  const [ dogs, setDogs ] = useState( [] )
  console.log("STATE of dogs: ", dogs)

  const [ fosters, setFosters ] = useState( [] )

  const baseURL = "http://localhost:3000/dogs"


  useEffect( () => {

  fetch(baseURL)
  .then( r => r.json() )
  .then( 
    ( fetchedData ) => {
        setDogs( fetchedData ) 

        let filterFosters = fetchedData.filter( 
          (eachDog) => {
            return(eachDog.foster === true )

        } )
        setFosters( [ ...filterFosters ] )
    } 
  )
}, []);


const handleAddNewDog = (newDog) => {
  let newDogArray = [ newDog, ...dogs ];
  setDogs(newDogArray);
}


  return (
    <div >


      <AllDogsList 
          dogs={dogs}

      />

      <AddNewDogForm 
          handleAddNewDog={handleAddNewDog}
      />

      <FosterList 
          fosters={fosters}
      />


    </div>
  );
}


export default DogMainContainer;
import React, { useEffect, useState } from "react";
import AllDogsList from "./AllDogsList";
import AddNewDogForm from "./AddNewDogForm";
import FosterList from "./FosterList";
import NavBar from "./NavBar";

// import { Route } from "react-router-dom";


function DogMainContainer() {

  const [ dogs, setDogs ] = useState( [] )
  console.log("STATE of dogs: ", dogs)

  const [ fosters, setFosters ] = useState( [] )
  // const [page, setPage] = useState("/")

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
  let newDogArray = [ ...dogs, newDog ];
  setDogs(newDogArray);
}


  return (
    <div >
      {/* <NavBar onChangePage={setPage} /> */}
      <NavBar />

      {/* <Route path="/"> */}
      <AllDogsList 
          dogs={dogs}
      />
      {/* </Route> */}

      {/* <Route path="/new"> */}
      <AddNewDogForm 
          handleAddNewDog={handleAddNewDog}
      />
      {/* </Route> */}

      {/* <Route path="/fosters"> */}
      <FosterList 
          fosters={fosters}
      />
      {/* </Route> */}


    </div>
  );
}


export default DogMainContainer;
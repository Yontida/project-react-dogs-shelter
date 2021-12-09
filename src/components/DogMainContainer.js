import React, { useEffect, useState } from "react";
import AllDogsList from "./AllDogsList";
import AddNewDogForm from "./AddNewDogForm";
import FosterList from "./FosterList";
import NavBar from "./NavBar";

// import { Route } from 'react-router-dom';
// import { BrowserRouter as Route , Switch } from 'react-router-dom';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


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
  let newDogArray = [ ...dogs, newDog ];
  setDogs(newDogArray);
}


  return (

    <div >
     
      <NavBar />

      {/* <Router> */}
      {/* <Switch> */}

      <BrowserRouter>
      <Routes>

      <Route path="/" element={<AllDogsList 
          dogs={dogs}
      />} />

      {/* <Route exact path="/">
      <AllDogsList 
          dogs={dogs}
      />
      </Route> */}

      <Route path="/new" element={<AddNewDogForm 
          handleAddNewDog={handleAddNewDog}
      />} />

      {/* <Route exact path="/new">
      <AddNewDogForm 
          handleAddNewDog={handleAddNewDog}
      />
      </Route> */}

      <Route path="/fosters" element={<FosterList 
          fosters={fosters}
      />} />

      {/* <Route exact path="/fosters">
      <FosterList 
          fosters={fosters}
      />
      </Route> */}


      </Routes>
    </BrowserRouter>

    {/* </Switch> */}
    {/* </Router> */}

    </div>

  );
}


export default DogMainContainer;
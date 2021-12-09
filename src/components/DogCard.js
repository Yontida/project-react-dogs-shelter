import React from "react";


function DogCard( { dogData } ) {

// const [ isInShelter, setIsInShelter ] =  useState(true)

// const handleToggleAdopt = (dogsObj) => {
//     setIsInShelter( (isInShelter ) => !isInShelter )
//   }


  return (
    <div >

      <li className="card"> 
        <img src={dogData.image} alt={dogData.name} />
        <h3>{dogData.name}</h3>
        <p>Breed: {dogData.breed}</p>
        <p>Size: {dogData.size}</p>
        <p>age: {dogData.age}</p>
        {/* <p>Status: {dogData.adopted}</p> */}


      {/* Button handleToggleAdopt */}
      {/* {isInShelter ? (
        <button className="primary" onClick={handleToggleAdopt}>
          In Shelter
        </button>
      ) : (
        <button onClick={handleToggleAdopt}>Adopted</button>
      )} */}

    </li>
    </div>
  );
}


export default DogCard;



//  try to make toggle persistance
// const baseURL = "http://localhost:3000/dogs"

// useEffect( () => {
  
//   fetch(baseURL)
//   .then( r => r.json() )
//   .then( 
//     ( fetchedUpdateData ) => {
//       setIsInShelter( fetchedUpdateData ) 
//     } 
//     )
//   }, [])


  // const updateAdoptionStatus = (fetchedUpdateData) => {
  //   fetch(`${baseURL}/${fetchedUpdateData.id}`,{
  //     method: 'PATCH',
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ dogs: { adopted: true } })
  //   })
  //   .then( r => r.json() )
  //   .then( fetchedUpdateData => console.log(fetchedUpdateData))
  // }
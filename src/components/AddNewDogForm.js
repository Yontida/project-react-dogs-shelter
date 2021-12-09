import React, { useState } from "react";

function AddNewDogForm( { handleAddNewDog } ) {

  const [ name, setName ] = useState("");
  const [ image, setImage ] = useState("");
  const [ breed, setBreed ] = useState("");
  const [ size, setSize ] = useState("");
  const [ age, setAge ] = useState("");
  const [ foster, setFoster ] = useState(false);
  const [ adopted, setAdopted ] = useState(false);

  
const handleSubmit = (event) => {
    // event.preventDefault();

    const newDogForm = {
      name,
      image,
      breed,
      size,
      age,
      foster,
      adopted,
    };

  fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDogForm),
    })
    .then( (r) => r.json() )
    .then( (newDog) => {
      handleAddNewDog(newDog);
    });

  }



  return (
    <div >
      <div className="route-header"><h2>Add New Dog</h2></div>

      <section>
        <form onSubmit={handleSubmit} className="form" autoComplete="off">

          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          /> 
          <br></br><br></br>

      

          <label htmlFor="image">ImageURL: </label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          <br></br><br></br>

          <label htmlFor="image">Breed: </label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
          /><br></br><br></br>


          <label htmlFor="image">Size: </label>
          <input
            type="text"
            id="size"
            name="size"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          /><br></br><br></br>

          <label htmlFor="image">Age: </label>
          <input
            type="text"
            id="age"
            name="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          /><br></br><br></br>


          <button type="submit">Add Dog</button>
          <br></br><br></br>

        </form>
      </section>



    </div>
  );
}


export default AddNewDogForm;
import React from "react";
import Header from "./Header";
import DogMainContainer from "./DogMainContainer";

// import { BrowserRouter as Router } from 'react-router-dom';

function App() {


  return (
    <div className="App">

      <Header />

      {/* <Router> */}
      <DogMainContainer />
      {/* </Router> */}

    </div>
  );
}

export default App;

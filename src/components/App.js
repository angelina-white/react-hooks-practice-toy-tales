import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";


function App() {
  //show form
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  //display toy list
  const [toyList, setToyList] = useState([])

  useEffect(() =>
  {
    fetch("http://localhost:3001/toys")
    .then (resp => resp.json())
    .then (setToyList)
  }, [])


  //add toy form
  const handleAddToy = (newToy) =>
  {
    setToyList([...toyList, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList}/>
    </>
  );
}

export default App;

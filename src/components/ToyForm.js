import React from "react";
import {useState} from "react"

function ToyForm({onAddToy}) {

const [newToy, setNewToy] = useState({name:"", image:""})

function handleChange(event)
{
  setNewToy({
    ...newToy,
    [event.target.name]: event.target.value
  })
}

function handleSubmit(event)
{
  event.preventDefault()

  const newerToy = 
  {
    name: newToy.name,
    image: newToy.image,
    likes: "0"
  }

  fetch("http://localhost:3001/toys", 
  {
    method: "POST",
    headers:
    {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newerToy)
  })
  .then(resp => resp.json())
  .then(data =>
  {
    onAddToy(data)
    setNewToy({name:"", image:""})
  })
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

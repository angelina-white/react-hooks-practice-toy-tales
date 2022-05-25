import React from "react";
import ToyCard from "./ToyCard";
import {useState} from "react"

function ToyContainer({toyList}) {

  const [removedToy, setRemovedToy] = useState("")

  const removeToy = (toy) =>
  {
    setRemovedToy(toy)
  }

  const newerList = toyList.filter((item) =>
  {
    if (item.id !== removedToy)
    {
      return (item)
    }
  })

  const [amountOfLikes, setAmountOfLikes] = useState({id: "", likes: ""})

  const newLikes = (wasLiked) =>
  {
    setAmountOfLikes({...amountOfLikes, ["id"]: wasLiked.id, ["likes"]: wasLiked.likes})
  }

  const likedList = newerList.map((item) =>
  {
      if (item.id === amountOfLikes.id)
      {
        return(
          {
            id: item.id,
            name: item.name,
            image: item.image,
            likes: amountOfLikes.likes
          }
        )
      }
      else 
      {
        return item
      }
  })

  // likedList.forEach((item) => console.log(item))


  // const newList = newerList.map((item) =>
  // {
  const newList = likedList.map((item) =>
  {
    return (
      <ToyCard toy={item} removeToy={removeToy} newLikes={newLikes}/>
    )
  })

  return (
    <div id="toy-collection">{newList}</div>
  );
}

export default ToyContainer;

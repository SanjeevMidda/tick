import React, { useState } from 'react'
import checkIcon from "../icons/check.png";

const fruits = ["strawberry", "pear", "apple", "pineapple", "bluberry"];

function ListItem() {

  const [tick, setTick] = useState(false);

  function setStatus(){
    setTick(!tick);
  }

  return (
    <div className="list">
      {
        fruits.map((fruitName) => {
          return <div className="listItem">
            <h3>{fruitName}</h3>
            <div className="box" onClick={setStatus}>{tick && <img src={checkIcon} alt="check"/>}</div>
          </div>
        })
      }
    </div>
  )
}

export default ListItem
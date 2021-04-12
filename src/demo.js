import React, {useState, useEffect} from "react";

export const MyComponent= ()=>{
  const [username, setUsername] = useState("Clarusway") // default name

  useEffect(()=>{
    setTimeout(()=>{
      setUsername("Clarusway Organization")
    }, 10000) // it will work 10 seconds after the render
  })

  return(
    <div>
      <h3>{username}</h3>
    </div>
  )
}
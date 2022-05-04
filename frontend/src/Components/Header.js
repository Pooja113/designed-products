import React, { useState } from 'react'
import axios from "axios"

const Header = () => {
  let [val,setVal] = useState(0);
  let valHandler = () =>{
    setVal((previousVal) => previousVal + 1);
  }


  return (
    <div>
      {val}
      <button onClick={valHandler}>Click</button>
    </div>
  )
}

export default Header

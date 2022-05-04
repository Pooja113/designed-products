import React, { useState } from 'react'

const Header = () => {
  let [val,setVal] = useState(0);
  let valHandler = () =>{
    setVal(val = val + 1);
  }
  return (
    <div>
      {val}
      <button onClick={valHandler}>Click</button>
    </div>
  )
}

export default Header

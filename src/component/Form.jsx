import React, { useState } from 'react'
import Child from './Child';

const Form = () => {
    const [state, setState] = useState(false)
    
    const handleClick =()=>{
        setState(!state);
    }

  return (
    <div>
      <h1>Hello World</h1>
     {
      state? <Child/>:null
     }
        <button onClick={handleClick}>Click here</button>

    </div>
   
  )
}

export default Form

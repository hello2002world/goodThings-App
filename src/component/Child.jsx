import React from 'react'
import User from './User';

const Child = () => {
  
  return (
    <div>
      <h1>Child Component</h1>
      <User name="Bhavna" dsg="trainer"/>
      <label htmlFor="field">No selected file</label>
      <input type="file" id="field" style={{display: 'none'}}/>
    </div>
  )
}
export default Child;

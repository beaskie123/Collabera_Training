import React from 'react'
import { useState } from 'react';


export default function Mandatory() {
    const [studId, setStudId] = useState('');
    const [btnIsTrue, setbtnIsTrue]= useState(true)
    const handleChange = event => {
        
    setStudId(event.target.value);
      if(studId !== ""){
        setbtnIsTrue(false)
      }
    console.log('value is:', event.target.value);
    console.log("btn", btnIsTrue)
    
  };

  return (
    <div>
        <input 
        type='text'
        id='stuId'
        name='studId'
        onChange={handleChange}
        value={studId}>
        
        </input>
        <label>Stud ID</label>
        <br/>
        <input type='text'
        ></input>
        <label>Stud Name</label>
        <br/>
        <input type='text'></input>
        <label>Address</label>
        <br/>
        <input type='text'></input>
        <label>Location</label>
        <br/>
        <input type='text'></input>
        <label>PH Number</label>
        <br/>
        <button disabled={btnIsTrue}>Submit</button>
    </div>
  )
}


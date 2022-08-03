import React from 'react'
import data from '../data'

export default function HomeScreen() {
  return (
    <div className="main-container">
    {
     data.background.map(background => (

         <div className="main-container">
             <h5 className="main-para">{background.intro}</h5>
             <img src={background.image} alt="background" className="main-img"/>
         </div>

     )) 
    }
    </div>
  )
}

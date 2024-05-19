import React from 'react'
import './Landing.css'
import { useNavigate } from "react-router-dom";

const Landing = () => {
    
    const handleDispose = () => {
        navigate('/')
    }
    const handleRecycle = () => {
        navigate('/')
    }
    const navigate = useNavigate();

  return (
        <div className='homepage'>
          <h1 className='heading '>EcoPlast</h1>
          <div className="buttons">
          <button className="dispose-waste" onClick={handleDispose}>Segregation</button>
         <button className="recycle-waste" onClick={handleRecycle}>Recycle Waste</button>
          </div>
        </div>
      
  )
}

export default Landing
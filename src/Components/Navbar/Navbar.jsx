import React from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = ({ defaulth }) => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const isLoggedIn = !!role;

  console.log(role,isLoggedIn)

  return (
    <div className='Navbar'>
      <div className='header'>
        <div className='logo'></div>
        <div className='head'>
          <h3 className='ecoplast-btn' onClick={() => { window.location.href = 'http://localhost:3001/' }}>Segregation</h3>
          <button 
            className={defaulth === 'Home' ? 'selectedpgchoice' : 'onlychoice'} 
            onClick={() => { navigate('/'); }} 
            value="Home">
            Home
          </button>
          {role === 'Waste_Collector' && (
            <button 
              className={defaulth === 'Garbage Nearby' ? 'selectedpgchoice' : 'onlychoice'} 
              onClick={() => { navigate('/garbagenearby'); }} 
              value="Garbage Nearby">
              Garbage Availability
            </button>
          )}
          <button 
            className={defaulth === 'Dashboard' ? 'selectedpgchoice' : 'onlychoice'} 
            onClick={() => { navigate('/dashboard'); }} 
            value="Dashboard">
            Dashboard
          </button>
          {!isLoggedIn && (
            <button 
              className={defaulth === 'UserLogin' ? 'selectedpgchoice' : 'onlychoice'} 
              onClick={() => { navigate('/sign'); }} 
              value="Login">
              SignIn/SignUp
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

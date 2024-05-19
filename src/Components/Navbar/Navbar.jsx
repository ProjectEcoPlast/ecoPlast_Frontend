import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";
const Navbar = ({defaulth}) => {
const navigate = useNavigate();
  return (
    <div className='Navbar'>
         <div className='header'>
        <div className='logo'>
        </div>
        <div className='head'>
          <h3 className='ecoplast-btn' onClick={(e) => { window.location.href='http://localhost:3001/' }} >Segregation</h3>
          <button className={defaulth === 'Home'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/home');}} value="Home">Home</button>
          <button className={defaulth === 'Garbage Nearby'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/garbagenearby');}} value="Garbage Nearby">Garbage Availability</button>
          <button className={defaulth === 'Dashboard'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/dashboard');}} value="Dashboard">Dashboard</button>
          <button className={defaulth === 'UserLogin'? 'selectedpgchoice' : 'onlychoice'} onClick={(e) => {navigate('/sign');}} value="Login">SignIn/SignUp</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar
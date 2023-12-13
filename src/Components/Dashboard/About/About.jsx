import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {

  const [ profileData, setProfileData ] = useState({ name:"", email:"",address:"",state:"", city:""  });

  useEffect(() => {
    const  name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const address = localStorage.getItem('address');
    const city = localStorage.getItem('city');
    const state = localStorage.getItem('state');
    const pin = localStorage.getItem('pin');
    setProfileData({ name, email, address, city, state, pin });

  },[setProfileData])

  return (
    <div className="About">
      <div className="dash_headingg">
        { <span className="ans">{profileData.name}</span>}
      </div>
      <div className="dash_txt">
        <span>City:&nbsp;&nbsp;</span>
        { <span className="ans">{profileData.city}</span>}
      </div>
      <div className="dash_txt">
        <span>Address:&nbsp;&nbsp;</span>
        { <span className="ans">{profileData.address}</span>}
      </div>
      <div className="dash_txt">
        <span>State:&nbsp;&nbsp;</span>
        { <span className="ans">{profileData.state}</span>}
      </div>

      <div className="dash_txt">
        <span>Phone No:&nbsp;&nbsp;</span>
        { <span className="ans">{profileData.mobileNum}</span>}
      </div>
      <div className="dash_txt">
        <span>Email:&nbsp;&nbsp;</span>
        { <span className="ans">{profileData.email}</span>}
      </div>
    </div>
  );
};

export default About;

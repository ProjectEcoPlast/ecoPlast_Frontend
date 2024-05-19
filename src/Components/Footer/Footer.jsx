import React from "react";
import "./Footer.css";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from "react-router-dom";
// import logo from "../../Assets/SSlogo.png";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Footer">
        {/* <img src={logo} alt="img" /> */}
        <div className="footerfields">
          <div className="follow">
            <div>
              <span>AKGEC Ghaziabad</span>
              <span>
                <PlaceOutlinedIcon sx={{ cursor: "pointer" }} />
              </span>
            </div>
            <div className="footerfollow">
              <span>Follow Us on</span>
            </div>
          </div>
          <div className="icons">
          <span className='about' onClick={(e) => {navigate('/about');}} value="About">About Us</span>
          <span className="footericon">
            <FacebookRoundedIcon sx={{ cursor: "pointer", height:"2rem",width:'2rem' }}/>
            <TwitterIcon sx={{ cursor: "pointer", height:"2rem",width:'2rem' }}/>
            <SubscriptionsRoundedIcon sx={{ cursor: "pointer", height:"2rem",width:'2rem' }}/>
          </span>
          </div>
          <span>Project Associate</span>
          <span>Services</span>
          <span className='login' onClick={(e) => {navigate('/sign');}} value="Login">Login</span>
        </div>
      </div>
      <div className="baseline">
        {/* <span>Designed and Developed by Team </span> */}
      </div>
    </>
  );
};

export default Footer;
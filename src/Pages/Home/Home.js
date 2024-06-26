import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar';
// import Slider from '../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
import Support from '../../Components/Support/Support';
import Chat from '../../Components/Chat/Chat'
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handlegarbageavailnavigate = () => {
    navigate("/GarbageNearby");
  }


  return (
    <div className='Home'>
      <div className='basecover'>
      <div className='base'>

        <Navbar defaulth={'Home'}/>
  
        <div className='tagline'>
            <span>You don't need to worry about handling the garbage</span>
        </div>
        
          <div className='logodiv'>
          </div>
        </div>
        </div>
        <div className='options'>
          <div className='opchoice' onClick={handlegarbageavailnavigate}>Garbage</div>
          <div id="hospitalchoice" className='opchoice'>GARBAGE</div>
          <div className='opchoice'>GARBAGE HANDLING</div>
        </div>
        <div className='sec2'>
          <span className='hosp_head'>Waste Management</span>

          {/* <Slider/> */}
          <div className='images'>
            <div className='hospt_img'>
            <img src='https://www.rts.com/wp-content/uploads/2019/11/23405746_1953349674932539_6655836021756150616_o-1-1024x683.jpg' alt="img"></img>
            <div className='combine'>
            <div className='GARBAGEtate'>
            <span className='hosp'>Say No To Plastic</span>
  
            </div>
            </div>
            </div>
            
            <div className='hospt_img'>
            <img src='https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600' alt="img"></img>
            <div className='combine'>
            <div className='GARBAGEtate'>
            <span className='hosp'>Safe Environment</span>
            </div>
            </div>
            </div>

            <div className='hospt_img'>
            <img src='https://images.pexels.com/photos/9035238/pexels-photo-9035238.jpeg?auto=compress&cs=tinysrgb&w=600' alt="img"></img>
            <div className='combine'>
            <div className='GARBAGEtate'>
            <span className='hosp'>Cleaning</span>
            </div>
            </div>
            </div>

            <div className='hospt_img'>
            <img src='https://media.springernature.com/full/springer-cms/rest/v1/img/23611344/v1/height/320' alt="img"></img>
            <div className='combine'>
            <div className='GARBAGEtate'>
            <span className='hosp'>CLEAN EARTH</span>
  
            </div>
            </div>
            </div>

          </div>
          <Chat/>
          <Support/>
          <Footer/>
        </div>

    </div>
  )
}

export default Home
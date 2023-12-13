import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import About from '../../Components/Dashboard/About/About';
import Hosprefimg from "../../Assets/hosprefimg.png";
import leaf from '../../Assets/leaf.png'
import { useNavigate } from "react-router";
import axios from 'axios';

const Dashboard = () => {

    const navigate = useNavigate();
    const [dash_id, setDash_id] = useState("");
    const [dash_result, setDash_result] = useState("");

    useEffect(() => {
        setDash_id(localStorage.getItem('_id'));
        console.log(localStorage.getItem('token'));
        if (dash_id) {
            axios.get(`http://localhost:8000//hospital/${dash_id}`)
                .then((res) => {
                    setDash_result(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
)

    const [clicked, setClicked] = useState("about");
    const handleDashboardBtn = (val) => {
        setClicked(val);
    }
    return (

        <div className='Dashboard'>
            <div className='headerdash'>
                <div className='dashBoard2'>
                    <Link to="/home" target='_blank'>
                    <span style={{ color:'white'}}>Dashboard</span></Link>
                </div>
            </div>
            <div className='dshsec'>
                <div className='dashsec1'>
                    <div onClick={(e) => handleDashboardBtn("about")} className={clicked === "about" ? "dashsec1_xy" : "dashsec1_xx"}>
                        <img src={leaf} alt="img"></img>
                        <span value="about" className='colorx'>Waste Disposal</span>
                    </div>
                    <div onClick={(e) => handleDashboardBtn("wastestatus")} className={clicked === "wastestatus" ? "dashsec1_xy" : "dashsec1_xx"}>
                        <img src={leaf} alt="img"></img>
                        <span className='colorx' value="wastestatus" >Waste Recycling</span>
                    </div>
                </div>

                <div className='dashsec2'>
                    {clicked === "about" && <About />}
                    {clicked === "wastestatus" && <wastestatus />}
                </div>
                <div className='dashsec3'>
                    <div className='dash_img'>
                        <img src={Hosprefimg} alt="img"></img>
                    </div>
                    <div className='img_below'>
                        {dash_result && <span className="main">{dash_result.dataWaste.name}</span>}
                        {dash_result && <span className="main">{dash_result.dataWaste.city}</span>}
                    </div>
                    <div style={{margin:"20px"}}>
                        {clicked === 'about' && <button className='edit_btn'
                        style={{ color: "white", background: "green", border: "none" }} onClick={(e) => { e.preventDefault(); navigate('/UpdateWaste') }}>Add Waste</button>}
                        {clicked === 'wastestatus' && <button className='edit_btn'
                        style={{ color: "white", background: "green", border: "none" }} onClick={(e) => { e.preventDefault(); navigate('/garbageAvailability') }}>Place Order</button>}
                        <button className='edit_btn'
                            style={{ color: "white", background: "red", border: "none", fontSize: "1.4rem" }}
                            onClick={() => {
                                localStorage.clear();
                                navigate('/sign');
                            }}> Logout </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
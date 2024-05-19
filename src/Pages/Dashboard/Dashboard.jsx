import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import About from '../../Components/Dashboard/About/About';
import Analytics from '../../Components/Dashboard/Analytics/WasteAnalytics';
import Hosprefimg from "../../Assets/hosprefimg.png";
import leaf from '../../Assets/leaf.png';
import { useNavigate } from "react-router";
import axios from 'axios';

const Dashboard = () => {
    const navigate = useNavigate();
    const [dash_result, setDash_result] = useState("");
    const [analyticsData, setAnalyticsData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
            axios.get(`http://localhost:8088/api/v1/user/waste-analytics`,{
                headers:{
                    token: token
                }
            })
                .then((res) => {
                    console.log(res.data);
                    setAnalyticsData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
    }, [true]);

    const [clicked, setClicked] = useState("about");
    const handleDashboardBtn = (val) => {
        setClicked(val);
    };

    return (
        <div className='Dashboard'>
            <div className='headerdash'>
                <div className='dashBoard2'>
                    <Link to="/home" target='_blank'>
                        <span style={{ color: 'white' }}>Home</span>
                    </Link>
                </div>
            </div>
            <div className='dshsec'>
                <div className='dashsec1'>
                    <div onClick={() => handleDashboardBtn("about")} className={clicked === "about" ? "dashsec1_xy" : "dashsec1_xx"}>
                        <img src={leaf} alt="img" />
                        <span className='colorx'>Profile - Page</span>
                    </div>
                    <div onClick={() => handleDashboardBtn("analytics")} className={clicked === "wastestatus" ? "dashsec1_xy" : "dashsec1_xx"}>
                        <img src={leaf} alt="img" />
                        <span className='colorx'>Waste Records</span>
                    </div>
                </div>

                <div className='dashsec2'>
                    {clicked === "about" && <About />}
                    {clicked === "analytics" && <Analytics data={analyticsData} />}
                </div>
                <div className='dashsec3'>
                    <div className='dash_img'>
                        <img src={Hosprefimg} alt="img" />
                    </div>
                    <div className='img_below'>
                        {dash_result && <span className="main">{dash_result.dataWaste?.name}</span>}
                        {dash_result && <span className="main">{dash_result.dataWaste?.city}</span>}
                    </div>
                    <div style={{ margin: "20px" }}>
                        {clicked === 'about' && <button className='edit_btn'
                            style={{ color: "white", background: "green", border: "none" }}
                            onClick={(e) => { e.preventDefault(); navigate('/addWaste') }}>Add Waste</button>}
                        {clicked === '"analytics' && <button className='edit_btn'
                            style={{ color: "white", background: "green", border: "none" }}
                            onClick={(e) => { e.preventDefault(); navigate('/garbageAvailability') }}>Add Waste</button>}
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
    );
};

export default Dashboard;

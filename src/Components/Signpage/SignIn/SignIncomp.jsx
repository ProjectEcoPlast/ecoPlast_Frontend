import React,{useState} from 'react'
import "./SignIncomp.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const SignInComponent = () => {
  const navigate = useNavigate();
  const [userId,setUserId] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    const data = {
      email:userId,
      password:password,
      role:role
    }
    axios.post('http://localhost:8000/login',data)
    .then((res) => {
        if(res.data.data.token){
          {navigate('/Dashboard');}
          localStorage.setItem("token",res.data.data.token);
          localStorage.setItem("name",res.data.data.name);
          localStorage.setItem("email",res.data.data.email);
          localStorage.setItem("city",res.data.data.city);
          localStorage.setItem("address",res.data.data.address);
          localStorage.setItem("pin",res.data.data.pin);
          localStorage.setItem("state",res.data.data.state);
        } 
      
    })
    .catch((err) => {
      console.log(err);
      toast.error('Enter correct details')
    })

  }
  return (
    <div className='SignIncomp'>
        <div className="userlogo">
            <AccountCircleIcon
              sx={{
                borderRadius: "100rem",
                bgcolor: "white",
                height: "5rem",
                width: "5rem",
              }}
            />
          </div>
          <div className="layer3">
            <div className="Userbox">
              <div className="text1" id="text">
                <span></span>
                <input onChange={(e) => {setUserId(e.target.value)}} value={userId} placeholder="Email" />
              </div>
              <div className="rradio">
              <div>
                <input onChange={(e) => {setRole('VENDOR')}} className="radiobutton" type="radio"  value={role} name="ht" id='role' />
                <label className='radiolabels' htmlFor="ht">Vendor</label>
              </div>
              <div>
                <input onChange={(e) => {setRole('SELLER')}} className="radiobutton" type="radio" value={role} name="ht" id='role' />
                <label className='radiolabels' htmlFor="ht">Seller</label>
              </div>
              <div>
                <input onChange={(e) => {setRole('ADMIN')}} className="radiobutton" type="radio" value={role} name="ht" id='role' />
                <label className='radiolabels' htmlFor="ht">Admin</label>
              </div>
            </div>
              <div className="text1">
                <span></span>
                <input onChange={(e) => {setPassword(e.target.value)}} value={password} placeholder="Password" />
              </div>
              <div className="signbtn">
                <button onClick={handleSignIn}>Sign In</button>
              </div>
            </div>
          </div>
          <ToastContainer/>
    </div>
  )
}

export default SignInComponent
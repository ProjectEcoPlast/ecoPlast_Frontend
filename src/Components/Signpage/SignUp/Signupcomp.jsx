import React, { useState } from "react";
import "./Signupcomp.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BACKEND_BASE_URL from "../../../Config/constant";

const SignupComp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [landMark, setLandMark] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Validation checks
    if (
      !name ||
      !houseNo ||
      !landMark ||
      !phone ||
      !email ||
      !city ||
      !state ||
      !password ||
      !confirmPassword ||
      !role ||
      !pincode
    ) {
      toast.error("Please fill in all the fields");
      return;
    }

    // Name validation
    const nameRegex = /^[A-Za-z ]{3,}$/;
    if (!nameRegex.test(name)) {
      toast.error("Name must contain only alphabets and be at least 3 characters long");
      return;
    }

    // City validation
    const cityStateRegex = /^[A-Za-z ]+$/;
    if (!cityStateRegex.test(city)) {
      toast.error("City must contain only alphabets");
      return;
    }

    // State validation
    if (!cityStateRegex.test(state)) {
      toast.error("State must contain only alphabets");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }

    // Mobile number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Enter a valid 10 digit mobile number");
      return;
    }

    // Pin code validation
    const pincodeRegex = /^\d{6}$/;
    if (!pincodeRegex.test(pincode)) {
      toast.error("Pin code must be a 6-digit number");
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const data = {
      name,
      email,
      mobile: phone,
      password,
      houseNo,
      landMark,
      state,
      city,
      pin: pincode,
      role,
    };
    console.log(data)
    axios
      .post(`${BACKEND_BASE_URL}/signup`, data)
      .then((res) => {
        // console.log("token at signup", res.data)
        if (res?.data?.data?.token) {
            {navigate('/Dashboard');}
            localStorage.setItem("token",res.data.data.token);
            localStorage.setItem("name",res.data.data.name);
            localStorage.setItem("email",res.data.data.email);
            localStorage.setItem("mobile",res.data.data.mobile);
            localStorage.setItem("city",res.data.data.city);
            localStorage.setItem("pin",res.data.data.pin);
            localStorage.setItem("state",res.data.data.state);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Enter valid details");
      });
  };

  return (
    <div className="SignupComp">
      <div className="userlogo2">
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
        <div className="outerlayer">
          <div className="Userbox2">
            <div className="text2" id="textt">
              <span></span>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
              />
            </div>
            <div className="text2in" id="text">
              <div className="ht">Role</div>
              <div className="rradio">
                <div>
                  <input
                    onChange={() => setRole("User")}
                    className="radiobutton"
                    type="radio"
                    checked={role === "User"}
                  />
                  <label className="radiolabels" htmlFor="ht">
                    User
                  </label>
                </div>
                <div>
                  <input
                    onChange={() => setRole("Waste_Collector")}
                    className="radiobutton"
                    type="radio"
                    checked={role === "Waste_Collector"}
                  />
                  <label className="radiolabels" htmlFor="ht">
                  Collector
                  </label>
                </div>
              </div>
            </div>
            <div className="text2">
              <span></span>
              <input
                onChange={(e) => setHouseNo(e.target.value)}
                value={houseNo}
                placeholder="House Number"
              />
            </div>
            <div className="text2">
              <span></span>
              <input
                onChange={(e) => setLandMark(e.target.value)}
                value={landMark}
                placeholder="Land mark"
              />
            </div>
            <div className="text2">
              <span></span>
              <input
                onChange={(e) => setCity(e.target.value)}
                value={city}
                placeholder="City"
              />
            </div>
            <div className="text2">
              <span></span>
              <input
                onChange={(e) => setState(e.target.value)}
                value={state}
                placeholder="State"
              />
            </div>
            <div className="text2">
              <span></span>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="Phone No."
              />
            </div>
            <div className="text2">
              <span></span>
              <input
                onChange={(e) => setPincode(e.target.value)}
                value={pincode}
                placeholder="Pin code"
              />
            </div>
            <div className="text2">
              <span></span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              />
            </div>
            <div className="text2">
              <span></span>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </div>
            <div className="text2">
              <span></span>
              <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Confirm Password"
              />
            </div>
            <div className="signbtn2">
              <button onClick={handleSignup}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupComp;

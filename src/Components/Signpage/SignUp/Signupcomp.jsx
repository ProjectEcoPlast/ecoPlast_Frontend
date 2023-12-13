import React, { useState } from "react";
import "./Signupcomp.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SignupComp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Validation checks
    if (
      !name ||
      !address ||
      !phone ||
      !email ||
      !city ||
      !state ||
      !password ||
      !role ||
      !pincode
    ) {
      toast.error("Please fill in all the fields");
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

    const data = {
      name,
      email,
      phone,
      password,
      address,
      state,
      city,
      pin: pincode,
      role,
    };

    axios
      .post("http://localhost:8000/register", data)
      .then((res) => {
        if (res.data.data.token) {
          localStorage.setItem("token", res.data.data.token);
          navigate("/home");
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
                    onChange={() => setRole("VENDOR")}
                    className="radiobutton"
                    type="radio"
                    checked={role === "VENDOR"}
                  />
                  <label className="radiolabels" htmlFor="ht">
                    Vendor
                  </label>
                </div>
                <div>
                  <input
                    onChange={() => setRole("SELLER")}
                    className="radiobutton"
                    type="radio"
                    checked={role === "SELLER"}
                  />
                  <label className="radiolabels" htmlFor="ht">
                    Seller
                  </label>
                </div>
              </div>
            </div>
            <div className="text2">
              <span></span>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder="Address"
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

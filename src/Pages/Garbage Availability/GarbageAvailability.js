import React, { useState, useEffect } from "react";
import "./GarbageAvailability.css";
import Hosprefimg from "../../Assets/hosprefimg.png";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router";
import axios from "axios";
import BACKEND_BASE_URL from "../../Config/constant";
import { useNavigate } from "react-router";
const GarbageAvailability = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { tokenId } = location.state || {};
  const [result, setResult] = useState(null);
  const [assignedMemberEmail, setAssignedMemberEmail] = useState("");
  const [assignedMemberMobile, setAssignedMemberMobile] = useState("");
  const [assignedMemberName, setAssignedMemberName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
    .get(`${BACKEND_BASE_URL}/user/waste-token/${tokenId}`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setResult(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error fetching data");
      });
  }, [tokenId]);

  const handleWastebooking = () => {
    const dataOfAssignedMember = {
      mobile: assignedMemberMobile,
      name: assignedMemberName,
      email: assignedMemberEmail,
    };

    // Name validation
    const nameRegex = /^[A-Za-z ]{3,}$/;
    if (!nameRegex.test(dataOfAssignedMember.name)) {
      toast.error("Name must contain only alphabets and be at least 3 characters long");
      return;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(dataOfAssignedMember.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    // Mobile number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(dataOfAssignedMember.mobile)) {
      toast.error("Enter a valid 10 digit mobile number");
      return;
    }

    const token = localStorage.getItem("token");
    axios
      .put(`${BACKEND_BASE_URL}/collector/waste-token/accept/${tokenId}`,
        dataOfAssignedMember,
        {
          headers: {
            token: token,
          },
        }
      )
      .then( async(res) => {
        console.log(res.data);
        toast.success("Waste booking successful!");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate("/home")
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error("Error booking waste");
      });
  };

  return (
    <div className="garbageavailability">
      <Navbar defaulth={"Garbage Nearby"} />
      <div className="availablesec">
        <div className="secdiv1">
          <img src={Hosprefimg} alt="img" />
        </div>
        <div className="secdiv2">
          <div className="titlehosp">
            {result && <span>{result.userId.name}</span>}
          </div>
          <div className="loc">
            <span>Location:</span>
            {result && <span className="ans">{result.userId.city}</span>}
          </div>
          <div className="ContactNo loc">
            <span>Contact No:</span>
            {result && <span className="ans">{result.userId.mobile}</span>}
          </div>
          <div className="WastesAvailable loc">
            <span>Wastes Available( In Kg ):</span>
            {result && (
              <span className="ans">
                {result.weightInKg} {result.wasteType}
              </span>
            )}
          </div>
          <div className="WastesPrice loc">
            <span>Price :</span>
            {result && <span className="ans">&#8377;{result.pricePerKg}</span>}
          </div>
          <span style={{ color: "red" }}>
            Add contact information for, who will collect waste from User.
          </span>
          <div className="loc" style={{ margin: "10px" }}>
            <span>Name :</span>
            <input
              className="ans xxx"
              type="text"
              minLength={3}
              maxLength={50}
              value={assignedMemberName}
              onChange={(e) => setAssignedMemberName(e.target.value)}
            />
          </div>
          <div className="ContactNo loc" style={{ margin: "10px" }}>
            <span>Email :</span>
            <input
              type="email"
              className="ans"
              value={assignedMemberEmail}
              onChange={(e) => setAssignedMemberEmail(e.target.value)}
            />
          </div>
          <div className="loc" style={{ margin: "10px" }}>
            <span>Mobile :</span>
            <input
              className="ans xxx"
              type="text"
              minLength={10}
              maxLength={10}
              value={assignedMemberMobile}
              onChange={(e) => setAssignedMemberMobile(e.target.value)}
            />
          </div>
          <div className="bookWaste">
            <Button
              onClick={handleWastebooking}
              variant="contained"
              sx={{ marginTop: "2vh", fontSize: "1.5rem", width: "30vw" }}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GarbageAvailability;

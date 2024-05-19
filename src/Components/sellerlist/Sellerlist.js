import React, { useEffect, useState } from "react";
import "./sellerlist.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Button from '@mui/material/Button';
import Button from "@mui/material/Button";
// import { width } from "@mui/system";
import plasticImage from "../../Assets/plasticBg.jpg";
import BACKEND_BASE_URL from "../../Config/constant";
const Sellerlist = ({
  tokenId,
  name,
  wasteFrom,
  wasteType,
  weightInKg,
  pricePerKg,
  contactInfo,
}) => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [waste_avail, setwaste_avail] = useState("");
  const [disable, setDisable] = useState("");

  useEffect(() => {
    if (tokenId) {
      const token = localStorage.getItem("token");
      axios
        .get(`${BACKEND_BASE_URL}/user/waste-token/${tokenId}`, {
          headers: {
            token: token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setwaste_avail(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [wasteType]);

  return (
    <div className="hrLine">
      <div className="Hosplist">
        <div className="inHosplist">
          <div className="hosplistimg">
            <img src={plasticImage} alt="img"></img>
          </div>
          <div className="hosplisttxt">
            <div className="hosplisttitle">
              <span>User : </span>
              <span key={name}>{name}</span>
            </div>
            <div className="shorttxt">
              <div className="line">
                <span>Contact No:</span>
                <span key={contactInfo.mobile} className="bluetxt">
                  {contactInfo.mobile}
                </span>
              </div>

              <div className="line">
                <span>Waste From:</span>
                <span key={name} className="bluetxt">
                  {wasteFrom}
                </span>
              </div>
              <div className="line">
                <span>Waste Type:</span>
                <span key={name} className="bluetxt">
                  {wasteType}
                </span>
              </div>
              <div className="line">
                <span>Quantity (kg):</span>
                <span key={name} className="bluetxt">
                  {weightInKg}
                </span>
              </div>
              <div className="line">
                <span>Price (/kg) :</span>
                <span key={name} className="bluetxt">
                  Rs {pricePerKg}
                </span>
              </div>

              <div className="line">
                <span>Contact Info : </span>
                <span key={name} className="bluetxt">
                  {contactInfo.email} ({contactInfo.mobile})
                </span>
              </div>
            </div>
          </div>
          <div className="moreinfo">
            <span>
              {disable === "" && (
                <Button
                  color="success"
                  sx={{ width: "10rem" }}
                  variant="contained"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/garbageAvailability", { state: { tokenId } });
                  }}
                >
                  Confirm the purchase
                </Button>
              )}
              {disable === "yes" && (
                <Button
                  disabled
                  color="success"
                  sx={{ width: "10rem" }}
                  variant="contained"
                >
                  Confirm the purchase
                </Button>
              )}
            </span>
          </div>
        </div>
      </div>
      <div></div>
      <hr
        style={{
          width: "75vw",
          height: "2px",
          borderwidth: "0",
          color: "gray",
          backgroundColor: "gray",
        }}
      />
    </div>
  );
};

export default Sellerlist;

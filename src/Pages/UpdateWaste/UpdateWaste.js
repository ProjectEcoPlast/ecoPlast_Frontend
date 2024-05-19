import React, { useState } from "react";
import "../Info/Info.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BACKEND_BASE_URL from "../../Config/constant";

const UpdateWaste = () => {
  const navigate = useNavigate();
  const [originWaste, setOriginWaste] = useState("");
  const [typeWaste, setTypeWaste] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    // Display loader
    setLoading(true);

    const data = {
      wasteFrom: originWaste,
      wasteType: typeWaste,
      weightInKg: quantity,
      pricePerKg: amount,
    };

    axios
      .post(`${BACKEND_BASE_URL}/user/waste-token`, data,{
        headers: {
          "Content-Type": "application/json",
          token: token
        }
      })
      .then((res) => {
        console.log("token added successfully", res)
        if (res?.data?.success === true ) {
          console.log("Waste token Added Successfully");
        }
        else{
          console.log("Waste token Not Added");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Enter correct details");
      })
      .finally(() => {
        setLoading(false);
        navigate("/dashboard");
      });
  };

  return (
    <div className="Updatewaste Info">
      <div className="center">
        <div className="incenter">
          <div className="layer1">
            <div className="signIn_logo"></div>
            <span className="welcome">Welcomes You</span>
          </div>
          <div className="layer2_1">
            <span>Provide Details</span>
          </div>
          <div className="layer3_1">
            <div className="input2">
              <div className="ininput2">
                <span className="waste_type">Garbage Type</span>
                <div className="divisionwastetype">
                  <div className="general">
                    <div className="generalin">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Origin of Waste
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Types of waste"
                          onChange={(e) => {
                            setOriginWaste(e.target.value);
                          }}
                        >
                          <MenuItem value="Industry">Industrial</MenuItem>
                          <MenuItem value="HouseHold">Household</MenuItem>
                          <MenuItem value="Market">Market</MenuItem>
                          <MenuItem value="Office">Office</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="generalin">
                      <TextField
                        id="outlined-basic"
                        sx={{ width: "30vw" }}
                        label="Per Kg Amount in Rs"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => {
                          setAmount(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="special">
                    <div className="generalin">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Types of Waste
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Types of waste"
                          onChange={(e) => {
                            setTypeWaste(e.target.value);
                          }}
                        >
                          <MenuItem value="Organic">Organic</MenuItem>
                          <MenuItem value="Plastic">Plastic</MenuItem>
                          <MenuItem value="Paper">Paper</MenuItem>
                          <MenuItem value="Metal">Metal</MenuItem>
                          <MenuItem value="Glass">Glass</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="generalin">
                      <TextField
                        id="outlined-basic"
                        sx={{ width: "30vw" }}
                        label="Quantity in Kg"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input3">
              <div className="ininput3"></div>
            </div>
            <div className="signbtn">
              <button onClick={handleUpdateSubmit} disabled={loading}>
                {loading ? "Submitting........" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateWaste;

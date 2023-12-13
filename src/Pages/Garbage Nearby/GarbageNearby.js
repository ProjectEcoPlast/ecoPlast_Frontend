import React, { useEffect, useState } from "react";
import "./GarbageNearby.css";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import Support from "../../Components/Support/Support";
import Footer from "../../Components/Footer/Footer";
import Button from "@mui/material/Button";
import SellerList from "../../Components/sellerlist/Sellerlist";

const GarbageNearby = () => {
  const [wasteData, setWasteData] = useState([]);
  const [wasteType, setWasteType] = useState([]);
  const [selectedWasteType, setSelectedWasteType] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/data/getSellData")
      .then((res) => {
        setWasteData(res.data.data);
        const waste_type = res.data.data.map((val) => val.wasteType);
        const uniqueWasteType = [...new Set(waste_type)];
        setWasteType(uniqueWasteType);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilter = () => {
    if(selectedWasteType === "All") window.location.reload();
    if (!!selectedWasteType) {
      const filteredData = wasteData.filter(
        (val) => val.wasteType === selectedWasteType
      );
      setWasteData(filteredData);
    } else return;
  };

  return (
    <div className="HospitalsNearby">
      <Navbar default={"Hospitals Nearby"} />
      <div className="filterout">
        <div className="left"> WasteType </div>
        <div className="right">
        <select
          value={selectedWasteType}
          onChange={(e) => setSelectedWasteType(e.target.value)}
        >
          <option value="All">
            All
          </option>
          {wasteType.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
        </div>
        <Button variant="contained" onClick={handleFilter}>
          Filter Out
        </Button>{" "}
      </div>

      <div className="hrLine">
        <hr
          style={{
            width: "75vw",
            height: "2px",
            borderWidth: "0",
            color: "gray",
            backgroundColor: "gray",
          }}
        />
      </div>
      <div className="hospitalList">
        {wasteData &&
          wasteData.map((val, i) => (
            <SellerList
              key={i}
              name={val.seller[0].name}
              wasteFrom={val.wasteFrom}
              wasteType={val.wasteType}
              weightInKg={val.weightInKg}
              pricePerKg={val.pricePerKg}
              contactInfo={val.seller[0]}
            />
          ))}
      </div>

      <Support />
      <Footer />
    </div>
  );
};

export default GarbageNearby;

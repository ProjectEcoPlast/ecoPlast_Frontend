import React from "react";
import "./WasteAnalytics.css";

const Analytics = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  const role = localStorage.getItem("role");
  if (role === "User") {
    return (
      <div className="analytics">
        <h2>Analytics</h2>
        <div className="analytics-section">
          <h3>Total waste : </h3>
          <ul>
            {data.totalWasteData.length === 0 ? (
              <li>null</li>
            ) : (
              data.totalWasteData.map((item, index) => (
                <li key={index}>
                  <span>Quantity : {item.wasteQuantityInKg} kg</span>
                  <span>Amount : {item.amount} INR</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="analytics-section">
          <h3>Total rejected waste : </h3>
          <ul>
            {data.totalRejectedWasteData.length === 0 ? (
              <li>null</li>
            ) : (
              data.totalRejectedWasteData.map((item, index) => (
                <li key={index}>
                  <span>Quantity : {item.wasteQuantityInKg} kg</span>
                  <span>Amount : {item.amount} INR</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="analytics-section">
          <h3>Total Pending Waste : </h3>
          <ul>
            {data.totalPendingdWasteData.length === 0 ? (
              <li>null</li>
            ) : (
              data.totalPendingdWasteData.map((item, index) => (
                <li key={index}>
                  <span>Quantity : {item.wasteQuantityInKg} kg</span>
                  <span>Amount : {item.amount} INR</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="analytics-section">
          <h3>Category wise sold waste : </h3>
          <ul>
            {data.totalSoldWasteTypeWiseData.length === 0 ? (
              <li>null</li>
            ) : (
              data.totalSoldWasteTypeWiseData.map((item, index) => (
                <li key={index}>
                  <span>Type : {item._id.wasteType}</span>
                  <span>Quantity : {item.wasteQuantityInKg} kg</span>
                  <span>Amount : {item.amount} INR</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="analytics-section">
          <h3>Collectors wise sold waste :</h3>
          <ul>
            {data.totalSoldWasteCollectorWiseData.length === 0 ? (
              <li>null</li>
            ) : (
              data.totalSoldWasteCollectorWiseData.map((item, index) => (
                <li key={index}>
                  <span>Collector Id : {item._id.wasteCollectorId}</span>
                  <span>Quantity : {item.wasteQuantityInKg} kg</span>
                  <span>Amount : {item.amount} INR</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    );
  } else if (role === "Waste_Collector") {
    return (
      <div className="analytics">
        <h2>Analytics</h2>
        <div className="analytics-section">
          <h3>Total waste : </h3>
          <ul>
            {data.totalWasteFromUserData.length === 0 ? (
              <li>null</li>
            ) : (
              data.totalWasteFromUserData.map((item, index) => (
                <li key={index}>
                  <span>Quantity : {item.wasteQuantityInKg} kg</span>
                  <span>Amount : {item.amount} INR</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="analytics-section">
          <h3>User wise collected waste : </h3>
          <ul>
            {data.userWiseWasteFromUsersData.length === 0 ? (
              <li>null</li>
            ) : (
              data.userWiseWasteFromUsersData.map((item, index) => (
                <li key={index}>
                  <span>userId : {item?._id?.userId}</span>
                  <span>Quantity : {item.wasteQuantityInKg} kg</span>
                  <span>Amount : {item.amount} INR</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="analytics-section">
          <h3>Type wise collected waste : </h3>
          <ul>
            {data.typeWiseWasteFromuserData.length === 0 ? (
              <li>null</li>
            ) : (
              data.typeWiseWasteFromuserData.map((item, index) => (
                <li key={index}>
                  <span>Type : {item?._id?.wasteType}</span>
                  <span>Quantity : {item.wasteQuantityInKg} kg</span>
                  <span>Amount : {item.amount} INR</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="analytics-section">
          <h3>Total waste sold to ecoPlast : </h3>
          <ul>
            {data.totalWasteSoldToEcoPlastData.length === 0 ? (
              <li>null</li>
            ) : (
              data.totalWasteSoldToEcoPlastData.map((item, index) => (
                <li key={index}>
                  <span>Quantity : {item.wasteQuantityInKg} kg</span>
                  <span>Amount : {item.amount} INR</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="analytics-section">
          <h3>Status wise total waste sold to ecoPlast :</h3>
          <ul>
            {data.statusWiseTotalWasteSoldToEcoPlastData.length === 0 ? (
              <li>null</li>
            ) : (
              data.statusWiseTotalWasteSoldToEcoPlastDataa.map((item, index) => (
                <li key={index}>
                  <span>Status : {item?._id?.status}</span>
                  <span>Quantity : {item.wasteQuantityInKg} kg</span>
                  <span>Amount : {item.amount} INR</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    );
  } else return null;
};

export default Analytics;

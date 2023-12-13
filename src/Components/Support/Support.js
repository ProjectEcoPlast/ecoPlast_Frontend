import React from "react";
import "./Support.css";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import PublicIcon from '@mui/icons-material/Public';
// import Support_bg from "../../Assets/support_bg.png";
const Support = () => {
  return (
    <div className="support_outer">
      <div className="iconbox">
      <div className="hearticon">
        {/* <FavoriteIcon sx={{ width: "3rem", height: "3rem" }} color="error" /> */}
        <PublicIcon sx={{ width: "3rem", height: "3rem"  }} color="success"/>
      </div>
      </div>
      <div className="Support">
        <span>Support Us</span>
      </div>
    </div>
  );
};

export default Support;

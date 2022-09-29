import React from "react";
import { Grid } from "@mui/material";
import HeadingText from "../../Components/HeadingText";
import InputFeild from "../../Components/InputField";
import Buttons from "../../Components/Buttons";
import SocialMedia from "../../Components/SocialMedia";
import BodyText from "../../Components/BodyText";
import "./index.css";
import pickup from "../../Assest/Pickup_Illustration.png"

const Main = () => {
  return (
    <div style={{  background: "#111720",  paddingLeft:"5%", paddingRight:"5%", paddingTop:"4%" ,paddingBottom:"5%"}}>
      <Grid container spacing={2} >
        <Grid item sm={12} md={5} xs={12}>
        <div style={{paddingTop:"20%"}}>
          <HeadingText className={"heading-responsive"}>
            Vehicle Maintenance<br></br> From the Comfort of <br></br>Your Home
          </HeadingText>
          <br></br>
          <BodyText className={"body-text-responsive"}>
            Open Auto Soothes the Auto hassle of maintaining your vehicle and
            helps <br></br> you deal with unexpected repairs worry-free
          </BodyText>
          <br></br>
          <br></br>
          <div
            className="input-responsive"
            style={{ }}
          >
            <InputFeild
              sx={{ width: "100%", position: "relative", color:"#cfd1d4" }}
              placeholder="Enter your name"
            />
            <br />
            <InputFeild sx={{ width: "100%",  color:"#cfd1d4" }} placeholder="Enter your email" />
            <br />
            <Buttons sx={{width:"100%",color:"#cfd1d4"}}  className="btn">Submit</Buttons>
          </div>
          </div>
        </Grid>
        <Grid item sm={12} md={7} xs={12}>
          <div style={{paddingTop:"5%"}}><div>
          <img   style={{width:"100%"}} src={pickup} alt="pickupillustration"/>
          </div></div>
        </Grid>
      </Grid>
      <div className="social-icon-responsive">
      <SocialMedia   />
      </div>
    </div>
  );
};

export default Main;

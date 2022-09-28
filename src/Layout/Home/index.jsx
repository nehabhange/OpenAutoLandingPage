import React from "react";
import { Grid } from "@mui/material";
import Text from "../../Components/Text";
import HomeImage from "../../Components/HomeImage";
import Form from "../../Components/InputField";
import Buttons from "../../Components/Buttons"
import SocialMedia from "../../Components/SocialMedia";
import BodyText from "../../Components/BodyText";
const Home = () => {
  return (
    <div style={{padding:"10%",background:"#111720"}}>
      <Grid container spacing={2}>
        <Grid item  sm={6} md={6} xs={12} style={{border:"1px solid black"}}>
          <Text sx={{fontSize:"20px"}}>Vehicle Maintenance<br></br> From the Comfort of <br></br>Your Home</Text>
          <BodyText>Open Auto Soothes the Auto hassle of maintaining your vehicle and helps <br></br> you deal with unexpected repairs worry-free</BodyText>
          <div  style={{border:"1px solid black"}}>
          <Form sx={{width:"100%",position:"relative"}} placeholder="Enter your name"/><br/>
          <Form  sx={{width:"100%"}} placeholder="Enter your email"/><br/>
<Buttons sx={{width:"100%"}}>Submit</Buttons>
</div>
        </Grid>
        <Grid item  sm={6} md={6} xs={12}>
          
        <HomeImage />
        </Grid>
      </Grid>
      <SocialMedia/>
    </div>
  );
};

export default Home;

import React from "react";
import { Grid } from "@mui/material";
import HomeText from "../../Components/HomeText";
import HomeImage from "../../Components/HomeImage";
import Form from "../../Components/Form";
import Buttons from "../../Components/Buttons"
import SocialMedia from "../../Components/SocialMedia";
const Home = () => {
  return (
    <div style={{padding:"10%"}}>
      <Grid container spacing={2}>
        <Grid item  sm={6} md={6} xs={12} style={{border:"1px solid black"}}>
          <HomeText />
          <div  style={{border:"1px solid black"}}>
          <Form sx={{width:"100%",position:"relative"}} placeholder="Enter your name"/><br/>
          <Form  sx={{width:"100%"}} placeholder="Enter your email"/><br/>
<Buttons sx={{width:"100%"}}>Submit</Buttons>
</div>
        </Grid>
        <Grid item  sm={6} md={6} xs={12}>
          
        <HomeImage/>
        </Grid>
      </Grid>
      <SocialMedia/>
    </div>
  );
};

export default Home;

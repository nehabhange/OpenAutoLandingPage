import { Grid } from "@mui/material";
import React from "react";
import Logo from "../../Components/Logo";
import IconText from "../../Components/IconsText";
import SocialMedia from "../../Components/SocialMedia";
const Footer = () => {
  return (
    <div style={{background:"#111720"}}>
      <Grid container spacing={2}>
        <Grid item sx={8} md={8} xs={12}><Logo/> Open</Grid>

        <Grid item sx={2} md={2} xs={12}><IconText/></Grid>
        <Grid item sx={2} md={2} xs={12}><IconText/> <SocialMedia style={{float:"right"}}/></Grid>
        
      </Grid>
    </div>
  );
};

export default Footer;

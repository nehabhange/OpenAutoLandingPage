import { Grid } from "@mui/material";
import React from "react";
import Logo from "../../Components/Logo";
import IconText from "../../Components/IconsText";
import SocialMedia from "../../Components/SocialMedia";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BodyText from "../../Components/BodyText";
const Footer = () => {
  return (
    <div
      style={{
        background: "#111720",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "4%",
      }}
    >
      <Grid container spacing={2} sx={{border:"1px solid yellow"}}>
        <Grid item xs={12} sm={12} md={6} sx={{border:"1px solid orange"}}>
          <Logo sx={{ marginLeft: "-15px" }} />
        </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{border:"1px solid yellow"}}>
          <Grid container spacing={2}>
            <Grid item  xs={6} sm={6} md={8}> 
            <div  style={{marginTop:"20px"}} ><IconText  sx={{float:"right"}}
            color="#cfd1d4"
            icon={<PhoneIcon sx={{ fontSize: "12px" }} />}
          >
            +769 586 4558
          </IconText></div></Grid>
            <Grid item   xs={6} sm={6} md={4}><div style={{marginTop:"20px"}}> <IconText  sx={{float:"right"}}
            color="#cfd1d4"
            icon={<EmailIcon sx={{ fontSize: "12px" }} fontSize="small" />}
          >
            service@openauto.ca
          </IconText></div></Grid>

          </Grid>
           
           
          </Grid>
        </Grid>
      
        <Grid container spacing={2} sx={{border:"1px solid yellow"}}>
        <Grid item xs={12} sm={12} md={4}  sx={{border:"1px solid yellow"}}>
          <BodyText sx={{ color: "#cfd1d4" }}>
            Openauto @ all rights reserved
          </BodyText>
        </Grid>
        <Grid item xs={12} sm={12} md={4}  sx={{border:"1px solid yellow"}}>terms</Grid>
      
      </Grid>
      <Grid item xs={12} sm={12} md={4}  sx={{border:"1px solid red"}}> <div style={{float:"right"}}><SocialMedia/></div></Grid>
      
      
    </div>
  );
};

export default Footer;

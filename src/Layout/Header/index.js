import React from 'react'
import {Grid} from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import Logo from '../../Components/Logo';
import Icontext from '../../Components/IconsText';
import Buttons from '../../Components/Buttons';
import PhoneIcon from '@mui/icons-material/Phone';
const Header = () => {
  return (
    
    <div style={{ border: "1px solid black", padding:"20px",background:"#111720" }}>
      <Grid container spacing={2}>
        <Grid item sm={6} md={6} xs={12}>
          <div>
        <Logo/>
          </div>
        </Grid>
        <Grid item  sm={6} md={6} xs={12}>
          <div>
            <Grid container spacing={2}>
              <Grid  item  xs={4}>
                <Icontext><span><PhoneIcon/></span>
                
                 +769 586 4558</Icontext>
              </Grid>
              <Grid  item xs={4}>
              
              <Icontext><span><EmailIcon/></span>service@openauto.ca</Icontext>
              </Grid>
              <Grid  item xs={4}><Buttons sx={{border:"2px solid grey",color:"white"}}>Download the mobile app</Buttons></Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
    
    
  )
}

export default Header
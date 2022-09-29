import React from 'react'
import {Grid} from "@mui/material"

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import Logo from '../../Components/Logo';
import Icontext from '../../Components/IconsText';
import Buttons from '../../Components/Buttons';

import "./index.css"

const Header = (props) => {
  return (
    
    <div style={{...props.sx,background:"#111720", paddingLeft:"5%", paddingRight:"5%"}}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={5} xs={12}>
          <div>
        <Logo sx={{ marginLeft:"-15px"}}/>
          </div>
        </Grid>
        <Grid  className='responsiveHide' item  sm={12} md={7} xs={12} >
          <div>
            <Grid container spacing={2}>
              <Grid  item  xs={12} sm={12} md={4} sx={{marginTop:"25px"}} >
                <Icontext color="#cfd1d4" icon={<PhoneIcon  sx={{fontSize:"12px"}} />}>
                
                 +769 586 4558</Icontext>
              </Grid>
              <Grid  item xs={12} sm={12} md={4} sx={{marginTop:"25px"}}>
              
              <Icontext color="#cfd1d4" icon={<EmailIcon  sx={{fontSize:"12px"}} fontSize='small'/>}>service@openauto.ca</Icontext>
              </Grid>
              <Grid  item xs={12} sm={12} md={4} style={{marginTop:"2%"}}><Buttons sx={{border:"2px solid grey",color:"#cfd1d4", width:"100%"}}>Download the mobile app</Buttons></Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
    
    
  )
}

export default Header
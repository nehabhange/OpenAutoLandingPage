import React from 'react'
import {Grid} from "@mui/material"

import Logo from '../../Components/Logo';
import Icontext from '../../Components/IconsText';
import Buttons from '../../Components/Buttons';
const Header = () => {
  return (
    
    <div style={{ border: "1px solid black", padding:"20px" }}>
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
                <Icontext/>
              </Grid>
              <Grid  item xs={4}>
              
              <Icontext/>
              </Grid>
              <Grid  item xs={4}><Buttons>Download our app</Buttons></Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
    
    
  )
}

export default Header
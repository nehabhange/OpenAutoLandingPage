import React from 'react'
import { Grid } from '@mui/material'
const HeaderComp = () => {
  return (
    <div style={{border:"1px solid black"}}>
    <Grid container spacing={2}>
    <Grid item xs={6}>
<div><div>OpenAuto</div></div>
  </Grid>
  <Grid item xs={6}>
  <div>2</div>
  </Grid>
    
    </Grid>
    </div>
  )
}

export default HeaderComp
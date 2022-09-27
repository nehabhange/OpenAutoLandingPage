import { Grid } from '@mui/material'
import React from 'react'
import pickservice from "../../Assest/Phone.svg";
import Text from '../../Components/Text';
import IconText from '../../Components/IconsText';
import BodyText from '../../Components/BodyText';
const Section = () => {
  return (
    <div><Grid container spacing={2}>
    <Grid item sm={6} md={6} xs={12} >
    <img width="100%" src={pickservice} alt="pickservice"/>
    </Grid>
    <Grid item sm={6} md={6} xs={12}>
    <Text>Focused On <br></br>Time Saving</Text>
    <BodyText></BodyText>
    
    </Grid>

    
    </Grid></div>
  )
}

export default Section
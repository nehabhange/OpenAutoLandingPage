import { Grid } from '@mui/material'
import React from 'react'
import pickservice from "../../Assest/Phone.svg";
import Text from '../../Components/Text';
import IconText from '../../Components/IconsText';
import BodyText from '../../Components/BodyText';
const Section = () => {
  return (
    <div style={{background:"rgb(21,26,36)"}}><Grid container spacing={4}>
    <Grid item sm={6} md={6} xs={12} >
    <img width="100%" src={pickservice} alt="pickservice"/>
    </Grid>
    <Grid item sm={6} md={6} xs={12}>
    <Text>Focused On <br></br>Time Saving</Text>
    <BodyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the <br></br> 1500s, when an unknown printer took a galley of type and scrambled it to  <br></br> make a type specimen book. </BodyText>
    
    </Grid>

    
    </Grid></div>
  )
}

export default Section
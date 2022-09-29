import { Button } from '@mui/material'
import React from 'react'
import "./index.css";
const button = (props) => {
 

  return (
    <div >
    <Button  className={props.className} style={{border:"1px solid grey",padding:"8px 25px 8px 25px",textTransform:"inherit",borderRadius:"25px",...props.sx}}>{props.children}</Button></div>
  )
}

export default button
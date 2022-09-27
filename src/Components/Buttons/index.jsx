import { Button } from '@mui/material'
import React from 'react'
import "./index.css";
const button = (props) => {
  return (
    <div className='button'>
    <Button  style={{border:"1px solid red",padding:"8px 25px 8px 25px",textTransform:"inherit",borderRadius:"25px",...props.sx}}>{props.children}</Button></div>
  )
}

export default button
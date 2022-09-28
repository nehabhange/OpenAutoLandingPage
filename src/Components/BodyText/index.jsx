import { Typography } from '@mui/material'
import React from 'react'
import "./index.css"
const BodyText = (props) => {
  return (
    <div className='body-text'><Typography variant="body1">{props.children}</Typography></div>
  )
}

export default BodyText
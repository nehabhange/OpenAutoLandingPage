import { Typography } from '@mui/material'
import React from 'react'

const BodyText = (props) => {
  return (
    <div><Typography variant="body1">{props.children}</Typography></div>
  )
}

export default BodyText
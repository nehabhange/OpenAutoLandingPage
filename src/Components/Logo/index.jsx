import React from 'react'
import logo from "../../Assest/logo.png"
const Logo = (props) => {
  return (
    <div style={{...props.sx}}>
    <img src={logo} alt="openautologo"/>
    </div>)
}

export default Logo
import React from 'react';

const icontext = (props) => {
  const color = props.color ? props.color : "black";
  return (
    <div>
    
    
    <div style={{ color:color,...props.sx}}><span style={{ paddingRight:"2px"}}>{props.icon}</span> {props.children}</div></div>
  )
}

export default icontext
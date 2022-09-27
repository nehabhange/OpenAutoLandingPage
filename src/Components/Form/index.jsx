import React from "react";
import { Box, TextField, Button } from "@mui/material";
const Form = (props) => {
  return (
    <div>
      <div>
        <input style={{padding:"10px",borderRadius:"25px",border:"1px solid black",...props.sx}} type="text" placeholder={props.placeholder}></input><br></br>
       
      </div>
    </div>
  );
};

export default Form;

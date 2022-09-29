import { Grid } from "@mui/material";
import React from "react";
import pickservice from "../../Assest/Phone.svg";
import HeadingText from "../../Components/HeadingText";
import BodyText from "../../Components/BodyText";
import Buttons from "../../Components/Buttons";
import "./index.css";
const Section = () => {
  return (
    <div style={{ background: "rgb(21,26,36)", paddingLeft:"5%", paddingRight:"5%", paddingTop:"4%" ,paddingBottom:"5%" }}>
      <Grid container spacing={2} sx={{}}>
        <Grid item sm={12} md={6} xs={12} order={{xs:2, sm:2, md:1}}  sx={{}}>
        <div  >
          <img className={"img-responsive"} src={pickservice} alt="pickservice" />
          </div>
        </Grid>
        <Grid item sm={12} md={6} xs={12} order={{xs:1, sm:1,md:2}} sx={{}} >
        <div style={{paddingTop:"15%"}}>
          <HeadingText className={"heading-responsive"}>
            Focused on <br></br>Time Saving
          </HeadingText>
          <br></br>
          <BodyText className={"body-text-responsive"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br></br>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the <br></br> 1500s, when an unknown printer took a galley of type
            and scrambled it to <br></br> make a type specimen book.{" "}
          </BodyText>
          <br></br>
          <div className="btn-responsive">
          <Buttons
            sx={{ width: "100%", border: "2px solid grey", color: "#cfd1d4" }}
          >
            Download the mobile app
          </Buttons></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section;

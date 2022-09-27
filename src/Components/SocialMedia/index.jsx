import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const SocialMedia = () => {
  return (
    <div>

        <ul style={{listStyle:"none",display:"inline-flex",float:"right",justifyContent:"space-between"}}>
          <li><FacebookIcon/></li>
          <li><TwitterIcon/></li>
          <li><YouTubeIcon/></li>
          <li><LinkedInIcon/></li>
          <li><InstagramIcon/></li>
        </ul>
     
    </div>
  );
};

export default SocialMedia;

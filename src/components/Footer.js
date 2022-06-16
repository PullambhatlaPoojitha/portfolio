import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/AddBoxSharp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faInstagram} from "@fortawesome/free-solid-svg-icons"

// import { withStyles } from '@material-ui/core/styles'
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        
      {/* <img src={github} alt="" width="150px" height="150px"/>
      <img src={github} alt="" width="150px" height="150px"/> */}
      {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
      <a href="https://github.com/PullambhatlaPoojitha"><i class="github icon"></i></a>
      {/* <i class="google icon"></i> */}
      <a href="https://www.linkedin.com/in/poojitha-pullambhatla-ab8538223/"></a><i class="linkedin icon"></i>
      <a href="https://gitlab.com/puzitha23"><i class="gitlab icon"></i></a>
      </div>
      {/* <p> &copy; 2022 pedrotech.com</p> */}
    </div>
  );
}

export default Footer;
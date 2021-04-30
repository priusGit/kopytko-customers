import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTripadvisor } from "@fortawesome/free-brands-svg-icons";
import { faYelp } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import classes from "./AsideIconBar.module.css";
const AsideIconBar = () => {
  const element = {
    instagram: <FontAwesomeIcon icon={faInstagram} />,
    twitter: <FontAwesomeIcon icon={faTwitter} />,
    Tripadvisor: <FontAwesomeIcon icon={faTripadvisor} />,
    Yelp: <FontAwesomeIcon icon={faYelp} />,
    Google: <FontAwesomeIcon icon={faGoogle} />,
  };
  return (
    <div className={classes.AsideIconBar}>
      <div>
        {element.instagram}
        {element.twitter}
        {element.Tripadvisor}
        {element.Yelp}
        {element.Google}
      </div>
    </div>
  );
};

export default AsideIconBar;

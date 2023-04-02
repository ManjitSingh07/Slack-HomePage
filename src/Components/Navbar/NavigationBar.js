import React, { useState } from "react";
import slack from "../../Assets/slackLogo.png";
import styles from "./NavigationBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
function NavigationBar() {
  const [dropDown, setDropDown] = useState(true);

  const mouseEnterHandler = () => {
    setDropDown(false);
  };
  const mouseLeaveHandler = () => {
    setDropDown(true);
  };
  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar__left}>
        <img src={slack} />
        <div
          className={styles.expand__more}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {" "}
          <p className={styles.productDescription}>Product
           <div>
              {dropDown ? (
                <ExpandMoreIcon fontSize="small" />
              ) : (
                <ExpandLessIcon fontSize="small" />
              )}
            </div> 
          </p>
          <div className={styles.product_details__hidden}>
            <p>Features</p>
            <p>Channels</p>
            <p>Digital HQ</p>
            <p>Integrations</p>
            <p>Slack Connect</p>
            <hr/>
            <p>Download Slack</p>

          </div>
        </div>

        <p> Solutions</p>
        <p>Enterprise</p>
        <p>Resources</p>
        <p>Pricing</p>
      </div>
      <div className={styles.navbar__right}>
        <div className={styles.searchIcon} >
          <SearchIcon />
        </div>
        <p>Sign in</p>
        <div className={styles.button__container_Sales}>
          <p>TALK TO SALES</p>
        </div>
        <div className={styles.button__container}>
          <button className={styles.button}>TRY FOR FREE</button>
        </div>
        <div className={styles.menu__hidden}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;

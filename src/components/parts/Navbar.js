import * as React from 'react';
import Paper from '@mui/material/Paper';
import classes from '../../styles/Navbar.module.css'
import { Link } from "react-router-dom";
import topBanner from '../../images/Banner.png'
import Logo from '../../images/Logo.png'

const ResponsiveAppBar = () => {
  return (
    <>
    {/* <img className = {classes.banner} src={topBanner} /> */}
      <div className={classes.bannerDiv}>
        <img className={classes.banner} src={topBanner}></img>
        <nav className={classes.fullNav}>
          <img src={Logo} class={classes.topHead} />
          <div class={classes.topNav}>
           <div class={classes.navTitleDiv}>
                Services
            </div>
            <div class={classes.navTitleDiv}>
                Products
            </div>
            <div class={classes.navTitleDiv}>
                Login
            </div>
            <div class={classes.navTitleDiv}>
                SignUp
            </div>
          </div>
        </nav>        
        <div className={classes.type}>
            <div className={classes.inner}>
              Unlocking Your Digital Vision...
            </div>
        </div>
      </div>
    </>
  );
};
export default ResponsiveAppBar;

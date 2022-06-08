import * as React from 'react';
import Paper from '@mui/material/Paper';
import classes from '../../styles/Navbar.module.css'
import { Link } from "react-router-dom";
import topBanner from '../../images/Banner.png'

const ResponsiveAppBar = () => {
  return (
    <>
    {/* <img className = {classes.banner} src={topBanner} /> */}
      <div className={classes.bannerDiv}>
        <img className={classes.banner} src={topBanner}></img>
        <nav className={classes.fullNav}>
          <p class={classes.topHead}>Compunnel Digital</p>
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
      </div>
    </>
  );
};
export default ResponsiveAppBar;

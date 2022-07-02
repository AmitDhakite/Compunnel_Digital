import React from 'react';
import classes from '../../styles/Footer.module.css';
import Logo from '../../images/Logo.png'
import foot from '../../images/foot.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

export default function App() {
  return (
    <>
    <div className={classes.footerPar}>
    <img className={classes.banner} src={foot}></img>
        <div className={classes.myfoot}>
          <div className={classes.col}>
            <h2 className={classes.shortHead}>Company</h2>
            <p className={classes.sp}>About Us</p>
            <p className={classes.sp}>Who We Are</p>
            <p className={classes.sp}>Core Values</p>
            <p className={classes.sp}>Events & Webinars</p>
            <p className={classes.sp}>Partners</p>
          </div>
          <div className={classes.col}>
            <h2 className={classes.shortHead}>Services</h2>
            <p className={classes.sp}>Analytics</p>
            <p className={classes.sp}>Robotics Process</p>
            <p className={classes.sp}>Automation</p>
            <p className={classes.sp}>Applied Intelligence</p>
            <p className={classes.sp}>All Services</p>
          </div>
          <div className={classes.col}>
            <h2 className={classes.shortHead}>Products</h2>
            <p className={classes.sp}>Analytics</p>
            <p className={classes.sp}>Robotics Process</p>
            <p className={classes.sp}>Automation</p>
            <p className={classes.sp}>Applied Intelligence</p>
            <p className={classes.sp}>All Services</p>
          </div>
          <div className={classes.col1}>
          <h1><span className={classes.ska}> SKA </span> Analytics<span> <img className={classes.logo} src={Logo} /></span></h1>
          <div>
       <i className={classes.fa}></i>
       <p><span>13th Street. 47 W 13th St, </span>New York, USA</p>
     </div>
            <h3 style={{color:"white"}}>Connect</h3>
            <div className={classes.icons}>              
            <div className={classes.icon}><FacebookIcon /></div>
            <div className={classes.icon}><LinkedInIcon /></div>
            <div className={classes.icon}><GoogleIcon /></div>
            <div className={classes.icon}><TwitterIcon /></div>
            <div className={classes.icon}><InstagramIcon /></div>
            </div>
          </div>
          <div className={classes.col}>          
          </div>
        </div>
        <div className={classes.fspan}>
        <span>2022 © SKA Analytics 2022. All rights reserved.</span>
    </div>  </div> </>
  );
  }
import React from 'react';
import classes from '../../styles/Footer.module.css';
import Logo from '../../images/Logo.jpeg'

export default function App() {
  return (
    <>
    <footer className={classes.footer}>
    
    <div style={{width:"33%"}} className={classes.footer_left}>
    <p className={classes.about}>
      <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
  </div>

  <div className={classes.footer_center} style={{width:"33%", marginLeft: '50px', marginRight:'-20px'}} >
    <div>
      <i className={classes.fa}></i>
      <p><span> Street name and number</span> City, Country</p>
    </div>
    <div>
      <i className={classes.fa}></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i className={classes.fa_envelope}></i>
      <p><a href="#"> office@company.com</a></p>
    </div>
  </div>

  <div className={classes.footer_right}>
    <h2> Compunnel Digital<span> <img className={classes.logo} src={Logo} /></span></h2>
    <p className={classes.menu}>
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p className={classes.name}> Compunnel Digital &copy; 2022</p>
  </div>
</footer>
    </>
  );
}
import React, {useEffect} from "react";
import classes from "../../styles/Discover.module.css";
import g1 from "../../images/g1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import g2 from "../../images/g2.jpg";

export default function MidBanner() {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
    return (
    <div className={classes.outer}>
        <div className={classes.head}>Discover SKA Analytics</div>
        <div className={classes.para}>Our clients always come first. We serve them through a global network powered by partnership, integrity, and a shared purpose of advancing sustainable economic growth and financial opportunity.</div>
        <div data-aos="fade-up"  className={classes.buttons}>
            <div className={classes.button1}><p>Products ></p></div>
            <div className={classes.button2}><p>Services</p></div>
        </div>
        <div  className={classes.photos}>
            <div className={classes.photo1}>
                <img className={classes.g1} src={g1} />
                <div className={classes.para1}>
                We serve a broad range of companies, organizations, and institutions through our financing, investing, execution and advisory capabilities.
                </div>
                <div className={classes.para1}>
                <button data-aos="fade-up"  className={classes.but}>Know More</button>
                </div>
                
            </div>
            <div className={classes.photo2}>
                <img className={classes.g2} src={g2} />
                <div className={classes.para2}>
                We provide insights, guidance, and services to help you achieve your financial and investing goals.
                </div>
                <div style={{marginTop: "10%"}}className={classes.para1}>
                <button data-aos="fade-up" className={classes.but}>Know More</button>
                </div>
            </div>
            
        </div>
      </div>
    );
}
    
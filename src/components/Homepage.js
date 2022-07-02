import React, {useEffect} from "react";
import Navbar from './parts/Navbar';
import Paper from '@mui/material/Paper';
import classes from '../styles/Homepage.module.css'
import Tabs from '../components/parts/Tabs'
import Transit from '../components/parts/Transit'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Footer from '../components/parts/Footer';
import MidBanner from './parts/MidBanner';
import Discover from './parts/Discover';
import Newsletter from './parts/Newsletter';
import Aos from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
    return (
        <>
            <Navbar />
            <Paper elevation={0} className={classes.loan_model}>
                <h2 className={classes.loan}><LocalAtmIcon /> Loan Modelling</h2>
                <Paper elevation={5} className={classes.second}>
                    <Tabs />
                </Paper>
            </Paper>
            <Discover data-aos="fade" />
            <Newsletter />
            <Footer />         
        </>
    );
};

export default Homepage;
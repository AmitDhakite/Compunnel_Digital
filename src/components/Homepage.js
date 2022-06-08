import Navbar from './parts/Navbar';
import Paper from '@mui/material/Paper';
import classes from '../styles/Homepage.module.css'
import Tabs from '../components/parts/Tabs'
import Transit from '../components/parts/Transit'


const Homepage = () => {

    return (
        <>
            <Navbar />
            <Paper elevation={0} className={classes.loan_model}>
                <h2 className={classes.loan}>Loan Modelling</h2>
                <Paper elevation={5} className={classes.second}>
                    <Tabs />
                </Paper>
            </Paper>
            
        </>
    );
};

export default Homepage;
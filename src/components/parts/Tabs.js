import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import HomeIcon from '@mui/icons-material/Home';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import classes from '../../styles/Tabs.module.css';
import Paper from '@mui/material/Paper';
export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
      console.log(newValue);
    setValue(newValue);
  };

  return (
      <>
    <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab className={classes.item} icon={<HomeIcon />} label="Home" />
      <Tab className={classes.item} icon={<AutoGraphIcon />} label="Predict" />
      <Tab className={classes.item} icon={<EqualizerIcon />} label="Visualize" />
    </Tabs>
    {value === 0 && 
        <Paper elevation={0} className={classes.amit}>
            The majority of customers inabank are liability customers (depositors) with varying sizes of deposits. The number of customers who are also borrowers(asset customers)is quite small,and the bank is interested in expanding this base rapidly to bring in more loan business and in the process,earn more through the interest on loans.In particular,the management wants to explore ways of converting its liability customers to personal loan customers (while retaining them as depositors). Loan Modelling App isaweb app that will help the marketing department of banks to identify the potential customers who haveahigher probability of purchasing the loan.
        </Paper>
    }
    {value === 1 && 
        <div className={classes.amit}>
            harsh
        </div>
    }
    {value === 2 &&
        <div className={classes.amit}>
            aditya
        </div>
    }
    </>
  );
}
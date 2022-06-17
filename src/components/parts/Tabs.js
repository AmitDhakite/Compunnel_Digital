import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import HomeIcon from '@mui/icons-material/Home';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import classes from '../../styles/Tabs.module.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Predict from "./Predict";
import Graph from "./Graph";

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: 'white',
  },
});
const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  root: {
    backgroundColor: 'white',
  },
  selected: {
    backgroundColor: 'purple',
  },
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: '#ECB390',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: 'white',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: 'white',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#701e1c',
  },
}));



export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <>
    <AntTabs className={classes.tabs} value={value} onChange={handleChange} aria-label="icon label tabs example">
      <AntTab className={classes.item} icon={<HomeIcon />} label="Home" />
      <AntTab className={classes.item} icon={<AutoGraphIcon />} label="Predict" />
      <AntTab className={classes.item} icon={<EqualizerIcon />} label="Visualize" />
    </AntTabs>
    {value === 0 && 
        <Paper elevation={0} className={classes.amit}>
          <h2 className={classes.innerHead}>Loan Modelling App</h2>
            The majority of customers inabank are liability customers (depositors) with varying sizes of deposits. The number of customers who are also borrowers(asset customers)is quite small,and the bank is interested in expanding this base rapidly to bring in more loan business and in the process,earn more through the interest on loans.In particular,the management wants to explore ways of converting its liability customers to personal loan customers (while retaining them as depositors). Loan Modelling App isaweb app that will help the marketing department of banks to identify the potential customers who haveahigher probability of purchasing the loan.
        </Paper>
    }
    {value === 1 && 
        <div className={classes.harsh}>
            <Predict></Predict>
        </div>
    }
    {value === 2 &&
        <div className={classes.aditya}>
            <Graph></Graph>
        </div>
    }
    </>
  );
}
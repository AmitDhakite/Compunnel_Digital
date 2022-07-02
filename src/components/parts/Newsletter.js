import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classes from "../../styles/Newsletter.module.css";
import Paper from '@mui/material/Paper';


export default function Newsletter() {
    return (<>
        <div className={classes.dv}>
            <div className={classes.up}>
                Get the SKA Analytics Five Ideas newsletter delivered to your inbox weekly.
            </div>
            <div className={classes.fill}>
            <Box            
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="standard-basic" label="Email Address" variant="standard" />
                <button className={classes.button}>Sign Up</button>
            </Box>
            </div>
        </div>
    </>);
}
import React, { useState } from 'react'
import BarChart from './BarChart'
import { UserData } from './Data';
import LineChart from './LineChart';
import PieChart from './PieChart';
import classes from "../../styles/Graph.module.css";


function Graph() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    // datasets: [
    //   {
        
    //     label: "Users Gained",
    //     data: UserData.map((data) => data.userGain),
    //     backgroundColor: [
    //       "rgba(75,192,192,1)",
    //       "#ecf0f1",
    //       "#50AF95",
    //       "#f3ba2f",
    //       "#2a71d0",
    //     ],
    //     borderColor: "black",
    //     borderWidth: 2,
    //   },
    //   ],
    
      
      datasets: [
      {
        
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
    
    
    
  });

    return (
        <div className="Graph">
            {/* <div style={{width: 700}}>
                <BarChart chartData={userData} />
            </div> */}

            <div className={classes.bar_width}>
                <BarChart chartData={userData} />
            </div>

            <div className={classes.line_width}>
                <LineChart chartData={userData} />
            </div>

            <div className={classes.pie_width}>
                <PieChart chartData={userData} />
            </div>
        </div>
    );
}

export default Graph
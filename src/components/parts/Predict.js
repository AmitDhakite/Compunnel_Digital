import React, { useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import BasicModal from "./Modal";
import classes from "../../styles/Predict.module.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import StickyHeadTable from "./Table";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import BasicButtons from "./Button";
import { Button } from "@mui/material";

import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { textAlign } from "@mui/system";
import ClearIcon from '@mui/icons-material/Clear';

function Predict() {
  const [showTable, setShowTable] = useState(false);
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const [highlighted, setHighlighted] = React.useState(false);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const showName = (e) => {
    return <h2>{e.dataTransfer.file[0].name}</h2>;
  };
 

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      setShowTable(true);
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div className={classes.maindiv}>
      <h3>Upload Test File to predict</h3>
      

      <div
        className={classes.div2}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          setHighlighted(false);

          //   Array.from(e.dataTransfer.files).filter(
          //     (file) => file.type === "text/csv"
          //   );
          console.log(e.dataTransfer.files);
          setFile(e.dataTransfer.files[0]);
        }}
      >
        <div className={classes.child}>
          <CloudUploadIcon></CloudUploadIcon>
        </div>

        <div className={classes.child}>
          Drag and Drop File Here
          <br></br>
          Limit 200MB per file
        </div>

        {file === null || file === undefined || file.length === 0 ? (
          <form className={(classes.child, classes.formi)}>
            <input
              className={classes.inp}
              type={"file"}
              id={"csvFileInput"}
              accept={".csv"}
              onChange={handleOnChange}
            />
          </form>
        ) : (
          <div>
            <InsertDriveFileIcon
              className={classes.child}
            ></InsertDriveFileIcon>
            <p className={classes.child}>{file.name}</p>

            <p className={classes.child}>{file.size} B</p>
            <div className={classes.cross} >
              <Button>
              <ClearIcon sx={{ fontSize: 20 }}></ClearIcon>
              </Button>
              
            </div>

          </div>
         
        )}
      </div>

      <br></br>
      <div
        onClick={(e) => {
          handleOnSubmit(e);
        }}
        style={{ textAlign: "left" }}
        className={classes.child}
      >
        <BasicButtons name="Predict"></BasicButtons>
      </div>
      {showTable && (
       <div className={classes.zoom}>
       <BasicModal array={array} headerKeys={headerKeys}></BasicModal>
     </div>

      )}
      

      <br></br>
      <br></br>
     

      {showTable && (
        <div>
          <div>
            <StickyHeadTable
              array={array}
              headerKeys={headerKeys}
            ></StickyHeadTable>
          </div>
          <br></br>
          <div>
            <CSVLink data={array}>
              <BasicButtons name="Download data as CSV"></BasicButtons>
            </CSVLink>
          </div>
        </div>
      )}
    </div>
  );
}
export default Predict;

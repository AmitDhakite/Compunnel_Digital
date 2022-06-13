import React, { useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import classes from "../../styles/Predict.module.css";
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
      <p>Upload Test File to predict</p>
      <p>Choose a file</p>

      <div
        style={{
          backgroundColor: "grey",
        }}
        className={`p-6 my-2 mx-auto max-w-md border-2 ${
          highlighted ? "border-green-600 bg-green-100" : "border-gray-600"
        }`}
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
        <p>Drag and Drop File Here</p>
        {file===null || file===undefined || file.length===0?<form style={{ textAlign: "right" }}>
          <input
            type={"file"}
            id={"csvFileInput"}
            accept={".csv"}
            onChange={handleOnChange}
          />

          <br></br>
        </form>
        :<p>{file.name}</p>}
      </div>

      <div></div>
      <button
        onClick={(e) => {
          handleOnSubmit(e);
        }}
        style={{ textAlign: "left" }}
      >
        Predict
      </button>
      <br></br>
      <br></br>

      {showTable && (
        <div className={classes.table}>
          <table>
            <thead>
              <tr key={"header"}>
                {headerKeys.map((key) => (
                  <th>{key}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {array.map((item) => (
                <tr key={item.id}>
                  {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <br></br>
      <div>
        <button>
          <CSVLink data={array}>Download data as CSV</CSVLink>
        </button>
      </div>
    </div>
  );
}
export default Predict;

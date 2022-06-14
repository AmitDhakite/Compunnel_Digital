import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import classes from "../../styles/Predict.module.css";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import StickyHeadTable from "./Table";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height:'89%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

export default function BasicModal(obj) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><ZoomOutMapIcon></ZoomOutMapIcon></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
            <div className={classes.predict} >
            <h2 id="modal-modal-title" variant="h6" component="h2" >
            Predicted Data
          </h2>
            </div>
          
          <div className={classes.zoomin}>
        
            <Button onClick={handleClose}> <CloseFullscreenIcon></CloseFullscreenIcon></Button>
          
          </div>
        <br></br>

        <br></br>
         <div>
            
            <div>
            <StickyHeadTable
              array={obj.array}
              headerKeys={obj.headerKeys}
            ></StickyHeadTable>
          </div>
            

           
           
           </div>
        </Box>
      </Modal>
    </div>
  );
}

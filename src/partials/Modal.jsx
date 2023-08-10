// React Material UI Modal implementation for Application Message
// TODO:
//  - Text styling? "Click outside this box to close" message?/"X" in the corner?
//  - Further generalization: have BasicModal take in modal header and message as props?

import * as React from "react";
import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "4px solid #000",
  boxShadow: 24,
  p: 4,
};

const modalHeader = <div>Application Status:</div>;

const modalMessage = (
  <div>
    Applications are currently closed! <br></br> Check back soon or subscribe to
    our mailing list to stay up to date.
  </div>
);

function BasicModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="focus:outline-none focus:ring-O">
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          fontFamily="Helvetica Neue"
        >
          {modalHeader}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {modalMessage}
        </Typography>
      </Box>
    </Modal>
  );
}

export default BasicModal;

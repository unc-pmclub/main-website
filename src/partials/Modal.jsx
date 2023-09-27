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
};

const headerStyle = {
  position: "relative",
  bgcolor: "#DC2626",
  color: "white",
  py: 2,
  px: 4,
  borderRadius: "5px 5px 0 0",
};

const messageStyle = {
  p: 4,
};

function BasicModal({ open, onClose, header, message }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        className="focus:outline-none focus:ring-O rounded-[10px]"
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          fontFamily="Helvetica Neue"
          sx={headerStyle}
        >
          {header}
        </Typography>
        <Typography id="modal-modal-description" sx={messageStyle}>
          {message}
        </Typography>
      </Box>
    </Modal>
  );
}

export default BasicModal;

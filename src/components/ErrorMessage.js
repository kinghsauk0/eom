import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function ErrorMessage({onoof,error,onClose}) {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "auto",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: "60px",
      };
    
  return (
    <Modal
    open={onoof}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography
        id="modal-modal-title"
        sx={{ color: "#FF0000", fontSize: "22px", fontWeight: "700" }}
        variant="h6"
        component="h2"
      >
        {error}
      </Typography>
    </Box>
  </Modal>
  )
}

export default ErrorMessage
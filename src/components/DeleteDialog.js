import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const DeleteDialog = ({ open, handleClose, handleDelete }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "33%",
          maxWidth: "none",
          borderRadius: "12px",
          border: "2px solid #808080",
          //   padding: "10px",
        },
      }} // Set width to 30%
    >
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <DialogContentText sx={{ color: "black", fontSize: "18px" }}>
          Are you sure you want to delete?
        </DialogContentText>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </DialogContent>
      <DialogActions sx={{ padding: "20px" }}>
        <Button
          onClick={handleClose}
          sx={{
            color: "#000000",
            border: "1px solid #808080",
            borderRadius: "10px",
            textTransform: "none",
            padding: "5px 20px",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          sx={{
            color: "#fff",
            border: "1px solid #808080",
            borderRadius: "10px",
            textTransform: "none",
            padding: "5px 20px",
            background: "#ff0000",
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;

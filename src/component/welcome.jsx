import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, Typography } from "@mui/material";
import { IoClose } from "react-icons/io5";

const WelcomeDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true); // Open every time this page is visited
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="welcome-dialog-title"
      maxWidth="xs"
      fullWidth
      PaperProps={{
        className:
          "!bg-[#0f398f] !text-white text-center rounded-2xl shadow-lg",
        style: { marginTop: "40px", minHeight: "240px", cursor: "pointer" }, // moved higher & taller
      }}
    >
      {/* Close Button Row */}
      <div className="relative flex justify-end px-3 pt-3">
        <button
          onClick={handleClose}
          className="text-white hover:text-gray-300 transition"
        >
          <IoClose size={26} />
        </button>
      </div>

      {/* Dialog Content */}
      <DialogContent
        dividers
        className="flex flex-col items-center justify-center py-10"
      >
        <Typography variant="h6" align="center" gutterBottom>
          Welcome to JD Academy of Excellence (JDAX) Online 🎉
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;

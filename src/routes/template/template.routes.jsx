import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Paper } from "@mui/material";

const Template = ({ children }) => {
  return (
    <Paper square>
      <Box sx={{ height: "100vh", display: "flex" }}>{children}</Box>
    </Paper>
  );
};

export default Template;

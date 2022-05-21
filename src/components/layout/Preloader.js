import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";

const Preloader = () => {
  return (
    <Box
      style={{ display: "flex", justifyContent: "center", alignItems: "end" }}
    >
      <CircularProgress color='secondary' />
    </Box>
  );
};

export default Preloader;

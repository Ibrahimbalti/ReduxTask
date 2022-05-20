import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import "./header.css";
const Header = () => {
  return (
    <Box className='topbarContainer'>
      <Typography variant='h6' style={{ paddingTop: "11px", color: "white" }}>
        Header
      </Typography>
    </Box>
  );
};

export default Header;

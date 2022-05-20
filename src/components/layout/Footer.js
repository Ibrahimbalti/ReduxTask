import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import "./footer.css";
const Footer = () => {
  return (
    <Box className='footer'>
      <Typography variant='h6' style={{ paddingTop: "11px", color: "white" }}>
        Footer
      </Typography>
    </Box>
  );
};

export default Footer;

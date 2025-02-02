import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Button from "@mui/material/Button";

const Card = () => {
  return (
    <Box sx={{ backgroundColor: "navy", color: "white" }}>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5">Work</Typography>
        <Button> ... </Button>
      </Box>
      <Typography variant="h2">23 hrs</Typography>
      <Typography sx={{ fontSize: ".75rem" }}>Last Week - 23 hrs</Typography>
    </Box>
  );
};

export default Card;

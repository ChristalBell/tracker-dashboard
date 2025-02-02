import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30vw",
      }}
    >
      <Box sx={{ backgroundColor: "blue" }}>
        <Typography>
          report for <br></br>
          <span style={{ fontSize: "3rem" }}>Jeremy Robson</span>
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "navy",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button>Daily</Button>
        <Button>Weekly</Button>
        <Button>Monthly</Button>
      </Box>
    </Box>
  );
};

export default Profile;

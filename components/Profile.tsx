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
        backgroundColor: "blue",
        // height: "30vh",
        borderRadius: "1rem",
      }}
    >
      <Box sx={{ padding: "8rem 2rem" }}>
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

          borderRadius: "1rem",
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

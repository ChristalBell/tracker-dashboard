import Card from "@/components/Card";
import Profile from "@/components/Profile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "purple" }}>
      <Box>
        <Profile />
        <Card />
      </Box>
    </Box>
  );
};

export default Home;

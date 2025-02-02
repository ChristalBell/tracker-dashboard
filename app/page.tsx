"use client";
import Card from "@/components/Card";
import Profile from "@/components/Profile";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import data from "../data.json";

const Home = () => {
  const [socials, setSocials] = useState(data);
  return (
    <Box sx={{ display: "flex" }}>
      <Profile />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {socials.map((social) => {
          return <Card key={social.topic} socials={social} />;
        })}
      </Box>
    </Box>
  );
};

export default Home;

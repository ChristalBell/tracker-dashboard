"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import data from "../data.json";
interface Props {
  socials: {
    topic: string;
    time: number;
  };
}
const Card = ({ socials }: Props) => {
  const { topic, time } = socials;
  return (
    <Box
      key={topic}
      sx={{
        backgroundColor: "red",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5">{topic} hrs</Typography>
        <Button> ... </Button>
      </Box>
      <Typography variant="h2">{time}</Typography>
      <Typography sx={{ fontSize: ".75rem" }}>Last Week - {time}</Typography>
    </Box>
  );
};

export default Card;

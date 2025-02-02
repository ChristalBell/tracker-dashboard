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
        paddingTop: "2.5rem",
        color: "white",
        borderRadius: "1rem",
        margin: "0 .5rem",
        marginBottom: "2rem",
      }}
    >
      <Box
        className="textContainer"
        sx={{
          backgroundColor: "orange",
          borderRadius: "1rem",
          padding: "1rem",
          width: "10rem",
          height: "8rem",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">{topic} </Typography>
          <Button> ... </Button>
        </Box>
        <Typography sx={{ fontSize: "2rem" }}>{time} hrs</Typography>
        <Typography sx={{ fontSize: ".75rem" }}>Last Week - {time}</Typography>
      </Box>
    </Box>
  );
};

export default Card;

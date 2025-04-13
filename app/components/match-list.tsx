import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import Match from "./match";
import NewsStory from "./news-story";
import {
  ArrowRight,
  KeyboardDoubleArrowRight,
  PlayArrow,
} from "@mui/icons-material";

const MatchList = () => {
  const darkC = "#1E1E1E";
  const mainC = "#F04D59";

  const lightC = "#181818";
  const [isHover, setIsHover] = useState(false);

  return (
    <Paper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      elevation={isHover ? 8 : 1}
      sx={{
        bgcolor: lightC,
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        gap: 1,
      }}
    >
      <Match></Match>
      <Match></Match>
      <Match></Match>
      <Match></Match>
      <Match></Match>
      <Match></Match>
      <Match></Match>
      <Button
        sx={{ fontWeight: "bold", color: "white", bgcolor: mainC }}
        variant="contained"
      >
        All games
        <KeyboardDoubleArrowRight></KeyboardDoubleArrowRight>
      </Button>
    </Paper>
  );
};

export default MatchList;

import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import { useState } from "react";
import { theme } from "../theme";
import Match from "./match";

const MatchList = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Paper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      elevation={isHover ? 8 : 1}
      sx={{
        bgcolor: theme.main,
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
        sx={{
          fontWeight: "bold",
          color: theme.heading,
          bgcolor: theme.highlight,
        }}
        variant="contained"
      >
        All games
        <KeyboardDoubleArrowRight></KeyboardDoubleArrowRight>
      </Button>
    </Paper>
  );
};

export default MatchList;

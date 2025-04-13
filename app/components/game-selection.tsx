"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const GameSelection = () => {
  const [game, setGame] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGame(event.target.value as string);
  };

  return (
    <FormControl fullWidth color="primary">
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={game}
        label="Age"
        onChange={handleChange}
        sx={{ color: "white" }}
        variant="standard"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GameSelection;

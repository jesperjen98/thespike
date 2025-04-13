import { Box, Typography } from "@mui/material";
import React from "react";

const Region = () => {
  const mainC = "#F04D59";

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        position: "relative",
        overflow: "hidden",
        "&:hover::before": {
          transform: "translateX(0)", // Animate in
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: `linear-gradient(to right, ${mainC} 40%, transparent 100%)`,
          opacity: 0.2,
          transform: "translateX(-100%)", // Start off-screen
          transition: "transform 0.5s ease",
          pointerEvents: "none",
        },
      }}
    >
      {/* Region name */}
      <Typography color="grey" fontWeight={"bold"}>
        International
      </Typography>
      {/* Tournamnet */}
      <Typography variant="h5" color="white" fontWeight={"bold"}>
        Masters Bangkok
      </Typography>
      {/* Date */}
      <Typography color={mainC} fontWeight={"bold"}>
        {" "}
        13 Mar - 18 May
      </Typography>
    </Box>
  );
};

export default Region;

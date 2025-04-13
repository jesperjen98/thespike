import { Refresh } from "@mui/icons-material";
import { Button, Typography, Box } from "@mui/material";
import React from "react";
import ExpandedMatch from "./expanded-match";

const ExpandedMatchList = () => {
  const lightC = "#1E1E1E";
  // const darkC = "#181818";
  const mainC = "#F04D59";
  //const [isHover, setIsHover] = useState(false);

  return (
    <Box
      sx={{
        width: "md",
        bgcolor: lightC,
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        gap: 1,
        flex: 1,
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography fontWeight={"bold"} variant="h5" color="white">
          Masters Bangkok
        </Typography>
        <Typography fontWeight={"bold"} variant="body1" color={mainC}>
          Today{" "}
        </Typography>
      </Box>
      <ExpandedMatch></ExpandedMatch>
      <ExpandedMatch></ExpandedMatch>
      <ExpandedMatch></ExpandedMatch>
      <ExpandedMatch></ExpandedMatch>
      <ExpandedMatch></ExpandedMatch>

      <Box
        padding={2}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Button
          sx={{ fontWeight: "bold", color: "white", bgcolor: mainC }}
          variant="contained"
        >
          Load More
          <Refresh />
        </Button>
      </Box>
    </Box>
  );
};

export default ExpandedMatchList;

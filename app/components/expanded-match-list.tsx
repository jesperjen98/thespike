import { Refresh } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { theme } from "../theme";
import ExpandedMatch from "./expanded-match";

const ExpandedMatchList = () => {
  return (
    <Box
      sx={{
        width: "md",
        bgcolor: theme.main,
        display: "flex",
        flexDirection: "column",
        padding: 2,
        gap: 1,
        flex: 1,
      }}
    >
      <Box>
        <Typography fontWeight={"bold"} variant="h5" color={theme.heading}>
          Masters Bangkok
        </Typography>
        <Typography fontWeight={"bold"} variant="body1" color={theme.highlight}>
          Today
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
          sx={{
            fontWeight: "bold",
            color: theme.heading,
            bgcolor: theme.highlight,
          }}
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

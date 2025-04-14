import { Box, Typography } from "@mui/material";
import { theme } from "../theme";

const Region = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        position: "relative",
        overflow: "hidden",
        "&:hover::before": {
          transform: "translateX(0)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          height: "100%",
          width: "100%",
          background: `linear-gradient(to right, ${theme.highlight} 40%, transparent 100%)`,
          opacity: 0.2,
          transform: "translateX(-100%)",
          transition: "transform 0.5s ease",
          pointerEvents: "none",
        },
      }}
    >
      <Box paddingLeft={1}>
        {/* Region name */}
        <Typography color={theme.text} fontWeight={"bold"}>
          International
        </Typography>
        {/* Tournamnet */}
        <Typography variant="h5" color={theme.heading} fontWeight={"bold"}>
          Masters Bangkok
        </Typography>
        {/* Date */}
        <Typography color={theme.highlight} fontWeight={"bold"}>
          13 Mar - 18 May
        </Typography>
      </Box>
    </Box>
  );
};

export default Region;

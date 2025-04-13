import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const ExpandedMatch = () => {
  const lightC = "#1E1E1E";
  const darkC = "#181818";
  const mainC = "#F04D59";

  const [isHover, setIsHover] = useState(false);

  return (
    <Paper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      elevation={isHover ? 8 : 2}
      sx={{
        bgcolor: lightC,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      {/* Content box */}
      <Box
        display="flex"
        justifyContent={"space-between "}
        alignItems={"center"}
        padding={2}
        position={"relative"}
      >
        <Button variant="contained" sx={{ backgroundColor: mainC }}>
          <PlayArrow />
        </Button>

        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={1}
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography variant="h5" fontWeight={"bold"} color="white">
            100T
          </Typography>
          <Image src={"./logo.svg"} alt="temp" width={60} height={60}></Image>
          <Typography variant="h4" color={mainC} sx={{ paddingX: 1 }}>
            /
          </Typography>

          <Image src={"./logo.svg"} alt="temp" width={60} height={60}></Image>
          <Typography variant="h5" fontWeight={"bold"} color="white">
            2GAME
          </Typography>
        </Box>
      </Box>
      {/* Subcontext box */}
      <Box
        bgcolor={darkC}
        display={"flex"}
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems="center"
        padding={1}
      >
        <Image src={"./vct.png"} alt="temp" width={16} height={16}></Image>

        <Typography fontWeight={"bold"} variant="body2" color={"grey"}>
          VCT EMEA • Week 3
        </Typography>
        <Typography fontWeight={"bold"} variant="body2" color={"grey"}>
          Bo3
        </Typography>
      </Box>
    </Paper>
  );
};

export default ExpandedMatch;

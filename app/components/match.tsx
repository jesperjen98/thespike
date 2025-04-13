import { PlayArrow } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Match = () => {
  const time = "07:00";
  const lightC = "#1E1E1E";
  const darkC = "#181818";
  const mainC = "#F04D59";

  const [isHover, setIsHover] = useState(false);

  return (
    <Paper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{
        bgcolor: lightC,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%" // Optional depending on parent
      >
        {/* Original Content */}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent="space-around"
          alignItems="center"
          sx={{
            opacity: isHover ? 0 : 1,
            transition: "opacity 0.3s",
          }}
        >
          <Box display={"flex"} gap={1} paddingY={1}>
            <Typography fontWeight={"bold"} color="white">
              {time}
            </Typography>

            <Typography fontWeight={"bold"} color="white">
              100T
            </Typography>
            <Image src={"./logo.svg"} alt="temp" width={30} height={30}></Image>
            <Typography fontWeight={"bold"} color={mainC} sx={{ paddingX: 1 }}>
              /
            </Typography>

            <Image src={"./logo.svg"} alt="temp" width={30} height={30}></Image>
            <Typography fontWeight={"bold"} color="white">
              2GAME
            </Typography>
          </Box>
        </Box>

        {/* Play Arrow Overlay */}
        <PlayArrow
          sx={{
            opacity: isHover ? 1 : 0,
            transition: "opacity 0.3s",
            position: "absolute",
            color: mainC,
            fontSize: "2rem", // Adjust size if needed
          }}
        />
      </Box>

      <Box
        bgcolor={darkC}
        display={"flex"}
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems="center"
        paddingX={1}
      >
        <Image src={"./vct.png"} alt="temp" width={12} height={12}></Image>

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

export default Match;

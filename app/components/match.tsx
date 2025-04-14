import { PlayArrow } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { theme } from "../theme";

const Match = () => {
  const time = "07:00";
  const imgSize = 30;

  const [isHover, setIsHover] = useState(false);

  return (
    <Paper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      elevation={isHover ? 4 : 1}
      sx={{
        bgcolor: theme.main,
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
          <Box display={"flex"} gap={1} paddingY={1} alignItems={"center"}>
            <Typography fontWeight={"bold"} color={theme.heading}>
              {time}
            </Typography>

            <Typography fontWeight={"bold"} color={theme.heading}>
              TLN
            </Typography>
            <Image
              src={"./talon.avif"}
              alt="talon"
              width={imgSize}
              height={imgSize}
            ></Image>
            <Typography
              fontWeight={"bold"}
              color={theme.highlight}
              sx={{ paddingX: 1 }}
            >
              /
            </Typography>

            <Image
              src={"./zeta.avif"}
              alt="zeta"
              width={imgSize}
              height={imgSize}
            ></Image>
            <Typography fontWeight={"bold"} color={theme.heading}>
              ZTA
            </Typography>
          </Box>
        </Box>

        {/* Play Arrow Overlay */}
        <PlayArrow
          sx={{
            opacity: isHover ? 1 : 0,
            transition: "opacity 0.3s",
            position: "absolute",
            color: theme.highlight,
            fontSize: "2rem", // Adjust size if needed
          }}
        />
      </Box>

      <Box
        bgcolor={theme.secondary}
        display={"flex"}
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems="center"
        paddingX={1}
      >
        <Image src={"./vct.png"} alt="temp" width={12} height={12}></Image>

        <Typography fontWeight={"bold"} variant="body2" color={theme.text}>
          VCT EMEA • Week 3
        </Typography>
        <Typography fontWeight={"bold"} variant="body2" color={theme.text}>
          Bo3
        </Typography>
      </Box>
    </Paper>
  );
};

export default Match;

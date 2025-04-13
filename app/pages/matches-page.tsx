import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import MatchList from "../components/match-list";
import RegionList from "../components/region-list";
import ExpandedMatchList from "../components/expanded-match-list";

const MatchesPage = () => {
  const lightC = "#1E1E1E";
  const darkC = "#181818";
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      sx={{
        backgroundImage: "url(valorant2_fade.png)",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <Container maxWidth={"lg"} sx={{ paddingTop: 10 }}>
        <Box display={"flex"} flexDirection={"row"} paddingBottom={2}>
          <Image src={"/logo.svg"} alt="temp" width={80} height={80}></Image>
          <Box paddingLeft={3}>
            <Typography variant="h5" color="white" sx={{ fontWeight: "bold" }}>
              The latest games
            </Typography>
            <Typography variant="body1" color="grey">
              Watch now!
            </Typography>
          </Box>
        </Box>

        <Paper
          elevation={isHover ? 8 : 1}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          sx={{
            bgcolor: lightC,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <RegionList></RegionList>
          <ExpandedMatchList></ExpandedMatchList>
        </Paper>
      </Container>
    </Box>
  );
};

export default MatchesPage;

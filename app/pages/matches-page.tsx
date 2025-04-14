import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import Aos from "aos";
import Image from "next/image";
import { useEffect, useState } from "react";
import ExpandedMatchList from "../components/expanded-match-list";
import MatchList from "../components/match-list";
import RegionList from "../components/region-list";
import { theme } from "../theme";

const MatchesPage = () => {
  const [isHover, setIsHover] = useState(false);
  const isSm = useMediaQuery(useTheme().breakpoints.up("sm"));

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        minHeight: "100vh",
        padding: 4,
        backgroundImage: "url(./valorant2_fade.png)",

        backgroundPosition: "bottom center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        color: theme.heading,
        alignItems: "center",
      }}
    >
      <Box width={"100%"} maxWidth={"lg"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          paddingBottom={2}
          paddingLeft={{ xs: 2, lg: 0 }}
        >
          <Image src={"./logo.svg"} alt="logo" width={80} height={80}></Image>
          <Box paddingLeft={3}>
            <Typography
              variant="h5"
              color={theme.heading}
              sx={{ fontWeight: "bold" }}
            >
              The latest games
            </Typography>
            <Typography variant="body1" color={theme.text}>
              Watch now!
            </Typography>
          </Box>
        </Box>

        <Paper
          elevation={isHover ? 16 : 8}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          sx={{
            bgcolor: theme.main,
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <RegionList />
          {isSm ? <ExpandedMatchList /> : null}
        </Paper>
        {isSm ? null : (
          <Box paddingTop={2}>
            <MatchList />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MatchesPage;

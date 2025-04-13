"use client";
import Image from "next/image";
import { Box, Fab, Typography } from "@mui/material";
import { CheckBox, KeyboardDoubleArrowDown } from "@mui/icons-material";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CheckBoxInfo from "./components/check-box-info";
import NewsStory from "./components/news-story";
import Matches from "./pages/news-page";
import NewsPage from "./pages/news-page";
import MatchesPage from "./pages/matches-page";

const mainC = "#F04D59";

const Home = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    // Center items in the middle of the container
    <Box>
      <Box
        sx={{
          backgroundImage: "url(valorant_fade.png)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundPosition: "center",
          backgroundSize: "cover",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Image
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          src={"/the spike.svg"}
          alt="temp"
          width={2000}
          height={200}
          style={{ maxWidth: "50vw", paddingBottom: 50 }}
        ></Image>
        <Box paddingBottom={10}>
          <CheckBoxInfo
            text={"Features all the latest matches, events and tournaments"}
          ></CheckBoxInfo>
          <CheckBoxInfo
            text={"Up to date guides and statistics for your gaming needs"}
            delay={500}
          ></CheckBoxInfo>
          <CheckBoxInfo
            text={"The latest news in the esport industry"}
            delay={1000}
          ></CheckBoxInfo>
        </Box>
        <Fab
          data-aos="fade-up"
          data-aos-delay="3000"
          data-aos-duration="500"
          sx={{ backgroundColor: mainC }}
          aria-label="add"
        >
          <KeyboardDoubleArrowDown />
        </Fab>
      </Box>
      <NewsPage />
      <MatchesPage></MatchesPage>
    </Box>
  );
};

export default Home;

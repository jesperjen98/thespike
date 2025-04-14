"use client";
import { Box } from "@mui/material";
import MatchesPage from "./pages/matches-page";
import NewsPage from "./pages/news-page";

import "aos/dist/aos.css";
import Footer from "./components/footer";
import HomePage from "./pages/home-page";

const Home = () => {
  return (
    // Center items in the middle of the container
    <Box>
      <HomePage />
      <NewsPage />
      <MatchesPage></MatchesPage>
      <Footer />
    </Box>
  );
};

export default Home;

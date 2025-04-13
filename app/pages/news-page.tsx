import { Container, Typography, Box, Divider } from "@mui/material";
import React from "react";
import Image from "next/image";

import NewsStory, { News } from "../components/news-story";
import { title } from "process";
import MatchList from "../components/match-list";

const NewsPage = () => {
  const cGap = 2;
  const darkC = "#0E0E10";
  const mediumC = "#1E1E1E";
  const lightC = "#181818";
  const news: News[] = [
    {
      title:
        "Faker locks in and becomes the best valorant player in the world.",
      content:
        "Last sunday Faker decided that being the best player in the world in one game was not enough, he is going for two. Valorant players better watch out as Faker is now dominating the Radiant ranks.",
    },
    {
      title:
        "Valorant players are shocked as de_dust2 is added to the map pool.",
      content:
        "Panic is brewing in the Valorant community as the Counter strike map de_dust2 is added to the rotating map pool.  This might have been an atempt to lure players over from counter strike or it might just be a late april fools joke.",
    },
    {
      title:
        "The pheonix character is getting nerfed to the ground, shocking says phoenix mains.",
      content: "Please dont nerf him, please!",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: darkC, paddingBottom: 20 }}>
      <Box display={"flex"} flexDirection={"row"} paddingBottom={2}>
        <Image src={"/logo.svg"} alt="temp" width={80} height={80}></Image>
        <Box paddingLeft={3}>
          <Typography variant="h5" color="white" sx={{ fontWeight: "bold" }}>
            Valorant esports news
          </Typography>
          <Typography variant="body1" color="grey">
            Read up on the latest in Valorant esports.
          </Typography>
        </Box>
      </Box>
      {/* Two columns section */}
      <Box sx={{ display: "flex", flexDirection: "row", gap: cGap }}>
        {/* Left col */}
        <Box
          sx={{
            flex: 3,
            display: "flex",
            gap: cGap,
            flexDirection: "column",
          }}
        >
          <Box>
            <NewsStory
              title={news[0].title}
              content={news[0].content}
            ></NewsStory>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={cGap}>
            {news.slice(1).map((_news, index) => (
              <NewsStory
                title={_news.title}
                content={_news.content}
              ></NewsStory>
            ))}
          </Box>
        </Box>
        {/* Right col */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: cGap,
          }}
        >
          <NewsStory></NewsStory>

          <MatchList></MatchList>
        </Box>
      </Box>
    </Container>
  );
};

export default NewsPage;

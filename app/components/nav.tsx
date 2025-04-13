import React from "react";

import Container from "@mui/material/Container";
import { Box, Button, Card, CardMedia, Divider, Paper } from "@mui/material";
import GameSelection from "./game-selection";
import NavButton from "./nav-button";

import {
  Assessment,
  AssessmentOutlined,
  CalendarMonth,
  CalendarMonthOutlined,
  CalendarMonthRounded,
  Chat,
  ChatBubbleOutline,
  EmojiEmotions,
  EmojiEmotionsOutlined,
  EmojiEvents,
  HelpCenterOutlined,
  HelpCenterRounded,
  Mouse,
  MouseOutlined,
  MouseRounded,
  NewspaperOutlined,
  ReceiptLong,
  ReceiptLongOutlined,
  ReceiptLongRounded,
  SportsEsports,
  SportsEsportsOutlined,
} from "@mui/icons-material";

const Nav = () => {
  const mouse = {
    icon: <MouseOutlined />,
    hover: <Mouse />,
  };
  const events = {
    icon: <CalendarMonthOutlined />,
    hover: <CalendarMonthRounded />,
  };

  const news = {
    icon: <ReceiptLongOutlined />,
    hover: <ReceiptLong />,
  };

  const guides = {
    icon: <SportsEsportsOutlined />,
    hover: <SportsEsports />,
  };

  const discuss = {
    icon: <ChatBubbleOutline />,
    hover: <Chat />,
  };

  const stats = {
    icon: <AssessmentOutlined />,
    hover: <Assessment />,
  };

  const predictions = {
    icon: <EmojiEmotionsOutlined />,
    hover: <EmojiEmotions />,
  };
  {
    /* FIXME: non constant width, maxwidth= xs is to big? */
  }
  {
    /* FIXME: container should be entire screen height? */
  }

  return (
    <Container
      sx={{
        width: "300px",
        m: 0,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100vh",
        backgroundColor: "#181818",
        borderRadius: "8px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 1px 12px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* FIXME: Change from 2 cards to Images? */}
      <Box display={"flex"} gap={1}>
        <Card elevation={0} sx={{ flex: 1, bgcolor: "transparent" }}>
          <CardMedia component="img" alt="green iguana" image="/logo.svg" />
        </Card>
        <Card
          elevation={0}
          sx={{
            flex: 2.5,
            display: "flex",
            alignItems: "center",
            bgcolor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image="/logo-text-white.svg"
          />
        </Card>
      </Box>
      <Divider sx={{ bgcolor: "white" }}></Divider>
      <NavButton name="Matches" icon={mouse}></NavButton>
      <NavButton name="Events" icon={events}></NavButton>
      <NavButton name="News" icon={news}></NavButton>
      <NavButton name="Guides" icon={guides}></NavButton>
      <NavButton name="Discuss" icon={discuss}></NavButton>
      <NavButton name="Stats" icon={stats}></NavButton>
      <NavButton name="Predictions" icon={predictions}></NavButton>
    </Container>
  );
};

export default Nav;

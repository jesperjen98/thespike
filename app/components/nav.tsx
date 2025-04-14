"use client";
import { Box, Divider, useMediaQuery, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Image from "next/image";
import NavButton from "./nav-button";

import {
  Assessment,
  AssessmentOutlined,
  CalendarMonthOutlined,
  CalendarMonthRounded,
  Chat,
  ChatBubbleOutline,
  EmojiEmotions,
  EmojiEmotionsOutlined,
  Mouse,
  MouseOutlined,
  ReceiptLong,
  ReceiptLongOutlined,
  SportsEsports,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import React from "react";
import { theme } from "../theme";
import NavDropdown from "./nav-dropdown";

export const mouseIcon = {
  icon: <MouseOutlined />,
  hover: <Mouse sx={{ color: theme.highlight }} />,
};
export const eventsIcon = {
  icon: <CalendarMonthOutlined />,
  hover: <CalendarMonthRounded sx={{ color: theme.highlight }} />,
};

export const newsIcon = {
  icon: <ReceiptLongOutlined />,
  hover: <ReceiptLong sx={{ color: theme.highlight }} />,
};

export const guidesIcon = {
  icon: <SportsEsportsOutlined />,
  hover: <SportsEsports sx={{ color: theme.highlight }} />,
};

export const discussIcon = {
  icon: <ChatBubbleOutline />,
  hover: <Chat sx={{ color: theme.highlight }} />,
};

export const statsIcon = {
  icon: <AssessmentOutlined />,
  hover: <Assessment sx={{ color: theme.highlight }} />,
};

export const predictionsIcon = {
  icon: <EmojiEmotionsOutlined />,
  hover: <EmojiEmotions sx={{ color: theme.highlight }} />,
};

const Nav = () => {
  const isLg = useMediaQuery(useTheme().breakpoints.up("lg"));
  const logoSize = isLg ? 58 : 40;

  return (
    <Container
      sx={{
        width: { xs: "100%", lg: "300px" },
        height: { xs: "60px", lg: "100vh" },
        backgroundColor: theme.secondary,
        p: { xs: 1, lg: 3 },
        display: "flex",
        flexDirection: { xs: "row", lg: "column" },
        justifyContent: { xs: "space-between", lg: "normal" },
        gap: { xs: 1, lg: 2 },
        overflowY: { xs: "visible", lg: "auto" },
        overflowX: { xs: "visible", lg: "hidden" },
      }}
    >
      {/* FIXME: Change from 2 cards to Images? */}
      <Box display={"flex"} justifyContent={"center"} gap={1}>
        <Image
          src={"./logo.svg"}
          alt="vct"
          width={logoSize}
          height={logoSize}
        ></Image>

        <Image
          src={"./logo-text-white.svg"}
          alt="vct"
          width={170}
          height={52}
        ></Image>
      </Box>
      {isLg ? <Divider sx={{ bgcolor: "white" }}></Divider> : null}
      {isLg ? (
        <React.Fragment>
          <NavButton name="Matches" icon={mouseIcon}></NavButton>
          <NavButton name="Events" icon={eventsIcon}></NavButton>
          <NavButton name="News" icon={newsIcon}></NavButton>
          <NavButton name="Guides" icon={guidesIcon}></NavButton>
          <NavButton name="Discuss" icon={discussIcon}></NavButton>
          <NavButton name="Stats" icon={statsIcon}></NavButton>
          <NavButton name="Predictions" icon={predictionsIcon}></NavButton>
        </React.Fragment>
      ) : (
        <NavDropdown />
      )}
    </Container>
  );
};

export default Nav;

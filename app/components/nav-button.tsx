"use client";
import { Box, Button, Fade, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import { theme } from "../theme";

type NavButtonProps = {
  name: string;
  icon: {
    icon: ReactElement;
    hover: ReactElement;
  };
};

// FIXME: Change icon: {icon, hover} to something else, icon: {standard, hover}?
const NavButton = ({ name, icon }: NavButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const fadeInTime = 500;

  return (
    <Button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      variant="contained"
      sx={{
        minWidth: 2,
        width: { xs: "100%", lg: "auto" },
        display: "flex",
        justifyContent: "start",
        bgcolor: theme.main,
      }}
    >
      {/* 

       */}
      <Box display={"flex"}>
        <Box position={"absolute"} lineHeight={0}>
          <Fade timeout={fadeInTime} in={!isHover}>
            {icon.icon}
          </Fade>
        </Box>
        <Box lineHeight={0}>
          <Fade timeout={fadeInTime} in={isHover}>
            {icon.hover}
          </Fade>
        </Box>
      </Box>

      <Typography
        fontSize={20}
        color={isHover ? theme.highlight : theme.heading}
        fontWeight={"bold"}
        sx={{
          marginLeft: { xs: 1, lg: isHover ? 2 : 1 },
          marginY: 1,
          transition: "margin 0.5s, color 0.5s",
        }}
      >
        {name}
      </Typography>
    </Button>
  );
};

export default NavButton;

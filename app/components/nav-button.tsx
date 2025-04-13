"use client";
import { Box, Button, Fade, Typography } from "@mui/material";
import { ReactElement, useState } from "react";

type NavButtonProps = {
  name: string;
  icon: {
    icon: ReactElement;
    hover: ReactElement;
  };
};

// Change icon: {icon, hover} to something else, icon: {standard, hover}?
const NavButton = ({ name, icon }: NavButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const fadeInTime = 500;

  return (
    <Button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      variant="contained"
      sx={{
        display: "flex",
        justifyContent: "start",
        bgcolor: "transparent",
      }}
    >
      {/* 

       */}
      <Box display={"flex"}>
        <Box position={"absolute"}>
          <Fade timeout={fadeInTime} in={isHover}>
            {icon.icon}
          </Fade>
        </Box>
        <Box>
          <Fade timeout={fadeInTime} in={!isHover}>
            {icon.hover}
          </Fade>
        </Box>
      </Box>

      <Typography
        fontSize={20}
        color={isHover ? "#ffedf0" : "white"}
        fontWeight={"bold"}
        sx={{
          marginLeft: isHover ? 2.5 : 1,
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

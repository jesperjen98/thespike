import { CheckBox } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { info } from "console";
import React from "react";

const mainC = "#F04D59";

type CheckBoxInfoProps = {
  delay?: number;
  text: string;
};

const CheckBoxInfo = ({ delay = 0, text }: CheckBoxInfoProps) => {
  return (
    <Box
      data-aos="fade-left"
      data-aos-delay={1000 + delay}
      data-aos-duration="1000"
      display={"flex"}
      alignItems={"center"}
      gap={1}
    >
      <CheckBox sx={{ color: mainC }} />
      <Typography variant="h5">{text}</Typography>
    </Box>
  );
};

export default CheckBoxInfo;

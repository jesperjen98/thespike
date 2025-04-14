import { CheckBox } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { theme } from "../theme";

type CheckBoxInfoProps = {
  delay?: number;
  text: string;
};

const CheckBoxInfo = ({ delay = 0, text }: CheckBoxInfoProps) => {
  return (
    <Box
      data-aos="fade-left"
      data-aos-delay={delay}
      data-aos-duration="1000"
      display={"flex"}
      alignItems={"center"}
      gap={1}
    >
      <CheckBox sx={{ color: theme.highlight }} />
      <Typography variant="h5" color={theme.heading}>
        {text}
      </Typography>
    </Box>
  );
};

export default CheckBoxInfo;

import { Box, Typography } from "@mui/material";
import { theme } from "../theme";

const Footer = () => {
  return (
    <Box
      padding={1}
      bgcolor={theme.main}
      display={"flex"}
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      <Typography variant="body1" fontWeight={"bold"} color={theme.heading}>
        Jesper Jensen 2025
      </Typography>
    </Box>
  );
};

export default Footer;

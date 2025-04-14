import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Box, Fab, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import Aos from "aos";
import { useEffect } from "react";
import CheckBoxInfo from "../components/check-box-info";
import { theme } from "../theme";

const HomePage = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const isLg = useMediaQuery(useTheme().breakpoints.up("lg"));
  const logoSize = isLg ? "50vw" : "90vw";

  return (
    <Box
      sx={{
        backgroundImage: "url(./valorant_fade.png)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundPosition: "center",
        backgroundSize: "cover",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
        src={"./the spike.svg"}
        alt="logo"
        width={2000}
        height={200}
        style={{ maxWidth: logoSize, paddingBottom: 50 }}
      ></Image>
      {isLg ? (
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
      ) : (
        <Box paddingBottom={10}>
          <CheckBoxInfo text={"All the lates matches"}></CheckBoxInfo>
          <CheckBoxInfo
            text={"Follow exiting tournaments"}
            delay={600}
          ></CheckBoxInfo>

          <CheckBoxInfo text={"Up to date guides"} delay={1200}></CheckBoxInfo>
          <CheckBoxInfo
            text={"Real time statistics"}
            delay={1800}
          ></CheckBoxInfo>

          <CheckBoxInfo
            text={"The latest esport news"}
            delay={2400}
          ></CheckBoxInfo>
        </Box>
      )}
      <Fab
        data-aos="fade-up"
        data-aos-delay="3000"
        data-aos-duration="500"
        sx={{ backgroundColor: theme.highlight }}
        aria-label="add"
      >
        <KeyboardDoubleArrowDown />
      </Fab>
    </Box>
  );
};

export default HomePage;

import { Box, Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { theme } from "../theme";

export interface News {
  title?: string;
  content?: string;
}

const ipsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const NewsStory = ({ title = "Lorem", content = ipsum }: News) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Paper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      elevation={isHover ? 8 : 1}
      sx={{
        // Clickable
        cursor: "pointer",

        // Flexbox
        height: "350px",
        display: "flex",
        flex: 5,
        flexDirection: "column",
        justifyContent: "end",
        paddingX: 2,
        paddingY: 1,

        // Background image
        backgroundImage: "url(./Jawgemo.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: theme.main,

        // Hover effects. FIXME: Can bug on scroll
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backdropFilter: isHover ? "blur(0px)" : "blur(4px)",
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${theme.main} 60%)`,
          opacity: isHover ? 0.9 : 1,
          transition: "opacity 0.5s ease, backdrop-filter 0.5s ease",
        },
      }}
    >
      <Box sx={{ zIndex: 2 }}>
        <Typography
          variant="h5"
          color={theme.heading}
          sx={{
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color={theme.text}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {content}
        </Typography>
        <Divider sx={{ bgcolor: theme.heading, marginY: 1 }}></Divider>
        <Typography fontWeight={"bold"} color={theme.highlight}>
          5h
        </Typography>
      </Box>
    </Paper>
  );
};

export default NewsStory;

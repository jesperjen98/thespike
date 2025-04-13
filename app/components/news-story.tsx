import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  CardActionArea,
  Paper,
  Container,
  Avatar,
  Chip,
  Divider,
  Modal,
} from "@mui/material";
import React, { useState } from "react";

export interface News {
  title?: string;
  content?: string;
}

const mainC = "#F04D59";

const temp =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const NewsStory = ({ title = "Lizard", content = temp }: News) => {
  const darkC = "#1E1E1E";
  const lightC = "#181818";
  const [isHover, setIsHover] = useState(false);

  // For modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleOpen}
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
        backgroundImage: "url(/Jawgemo.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: darkC,

        // Hover effects
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backdropFilter: isHover ? "blur(0px)" : "blur(4px)", // Change this value for more/less blur
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${darkC} 60%)`,
          opacity: isHover ? 0.9 : 1,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ zIndex: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
          color="white"
        >
          {title}
        </Typography>
        <Typography
          color="grey"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
          variant="body1"
        >
          {content}
        </Typography>
        <Divider sx={{ bgcolor: "white", marginY: 1 }}></Divider>
        <Typography fontWeight={"bold"} color={mainC}>
          5h
        </Typography>
      </Box>
    </Paper>
  );
};

export default NewsStory;

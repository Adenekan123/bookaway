import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Stack, IconButton, Typography } from "@mui/material";
import {
  Camera,
  ImageSearchOutlined,
  VideoLibraryOutlined,
} from "@mui/icons-material";
const Navigation = () => {
  return (
    <Container
      className="navigation"
      sx={{
        padding: "0px !important",
        flexBasis: "100px",
        zIndex: "2",
        maxWidth: { xs: "100%", sm: "100px" },
        maxHeight: { xs: "50px", sm: "inherit" },
        position: { xs: "absolute", sm: "relative" },
        bottom: { xs: "0px", sm: "initial" },
        bgcolor: "secondary.main",
      }}>
      <Container
        maxWidth="100%"
        className="brands"
        sx={{
          m: 0,
          display: { xs: "none", sm: "block" },
          padding: "10px !important",
        }}>
        <Link to="https://www.pexels.com">
          <img src="https://images.pexels.com/lib/api/pexels.png" height={25} />
        </Link>
      </Container>
      <Container
        maxWidth="100%"
        className="routes"
        sx={{ mt: { xs: 0, sm: 20 }, padding: "0px !important" }}>
        <Container
          maxWidth="100%"
          sx={{
            padding: "0px !important",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "row", sm: "column" },
          }}>
          <Link to="/" sx={{ mb: 3 }}>
            <IconButton size="large" color="info">
              <ImageSearchOutlined />
            </IconButton>
          </Link>

          <Link to="/videos">
            <IconButton size="large">
              <VideoLibraryOutlined />
            </IconButton>
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export default Navigation;

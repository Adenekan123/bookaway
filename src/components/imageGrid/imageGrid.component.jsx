import React, { useEffect, useState, useContext } from "react";

import { PictureContext } from "../../contexts/pictures.context";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Grid,
  Box,
  CircularProgress,
  Skeleton,
  IconButton,
  Avatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
const Photographer = ({ photographer, url }) => (
  <ImageListItemBar
    actionIcon={
      <IconButton>
        <Avatar>
          <AccountCircleIcon color={"info"} />
        </Avatar>
      </IconButton>
    }
    title={"By: " + photographer}
    sx={{ display: "none" }}
  />
);
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

function ImageGrid({ items }) {
  const { loadingRef, isLoading } = useContext(PictureContext);

  return (
    <>
      <Grid container spacing={2}>
        {items.map(({ id, alt, src, photographer, photographer_url }) => (
          <Grid
            item
            key={id + alt}
            xs={6}
            md={3}
            sx={{
              "&:hover .MuiImageListItemBar-root": { display: "flex" },
            }}>
            {!isLoading ? (
              <Link
                to={`/photo/${id}`}
                key={id}
                style={{ position: "relative" }}>
                {photographer && photographer_url && (
                  <Photographer
                    photographer={photographer}
                    url={photographer_url}
                  />
                )}

                <img
                  src={`${src.landscape}?w=248&fit=crop&auto=format`}
                  srcSet={`${src.portrait}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={alt}
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </Link>
            ) : (
              <Skeleton variant="rectangular" width={"100%"} height="300px" />
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ImageGrid;

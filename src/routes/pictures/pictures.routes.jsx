import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Fab,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";

import { FilterAltOutlined, Close } from "@mui/icons-material";

import Header from "../../components/common/header/header.component";
import Filter from "../../components/filter/filter.component";
import ImageGrid from "../../components/imageGrid/imageGrid.component";
import Error from "../../components/Error/error.component";

import { SearchContext } from "../../contexts/search.context";
import { FilterContext } from "../../contexts/filter.context";
import { PictureContext } from "../../contexts/pictures.context";
import { SearchQueriesContext } from "../../contexts/search-queries.context";

//APIs
// import { searchPhothos } from "../../utils/pexel/pexel.utils";
import SearchHistory from "../../components/search-history/search-history.component";

const Pictures = () => {
  const { query, clearQuery } = useContext(SearchContext);
  const { filter, onFilterChange, mobileFilter, toggleMobileFilter } =
    useContext(FilterContext);
  const { addQuery } = useContext(SearchQueriesContext);
  const {
    page,
    curated,
    pictures,
    searchPhotos,
    getMorePhotos,
    searchMorePhothos,
    error,
    isLoading,
    loadingRef,
  } = useContext(PictureContext);

  const { color, size, per_page, orientaion } = filter;

  const matchMobileSize = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    if (query || size || color || per_page || orientaion) {
      console.log("Search runs");
      const intervalid = setTimeout(() => {
        searchPhotos(page, query, filter);
        addQuery(query);
      }, 1500);
      return () => clearTimeout(intervalid);
    }
  }, [query, filter]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.intersectionRatio > 0 && entry.isIntersecting) {
  //           if (curated.length) {
  //             console.log("Load more curated", page + 1);
  //             getMorePhotos(page + 1);
  //           }
  //           if (pictures.length) {
  //             console.log("Load more Search", page + 1);
  //             searchMorePhothos(page + 1, query, filter);
  //           }
  //         }
  //       });
  //     },
  //     {
  //       rootMargin: "0px 0px 500px 0px",
  //     }
  //   );
  //   observer.observe(loadingRef.current);
  //   return () => observer.disconnect();
  // }, [pictures, curated]);
  return (
    <Box
      sx={{
        flex: "1",
        display: "flex",
      }}>
      <Outlet />
      {!matchMobileSize && query && (
        <Container
          sx={{
            flexBasis: "18%",
            paddingRight: "0px!important",
            backgroundColor: "primary.main",
            maxWidth: "100%",
          }}>
          <Filter value={filter} onFilterChange={onFilterChange} />
        </Container>
      )}

      {matchMobileSize && (
        <Fab
          aria-label="filter"
          color="info"
          onClick={toggleMobileFilter}
          sx={{
            position: "fixed",
            right: 16,
            bottom: 56,
            zIndex: 2000,
          }}>
          {mobileFilter ? <Close /> : <FilterAltOutlined />}
        </Fab>
      )}

      <Container
        maxWidth="100%"
        sx={{
          flex: "1",
          overflow: "hidden",
          overflowY: "auto",
        }}>
        <Header />
        <SearchHistory />
        {error && <Error message={error} />}

        <ImageGrid
          items={curated.length ? curated : pictures.length ? pictures : []}
        />
        {/* <Box
          ref={loadingRef}
          sx={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}>
         
        </Box> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            p: 4,
            mb: 5,
          }}>
          {isLoading && <CircularProgress color={"info"} />}

          {!isLoading && pictures.length ? (
            <Button
              variant="contained"
              color="info"
              size="small"
              onClick={() => searchMorePhothos(page + 1, query, filter)}>
              Load More
            </Button>
          ) : (
            ""
          )}
          {!isLoading && curated.length ? (
            <Button
              color="info"
              variant="contained"
              size="small"
              onClick={() => getMorePhotos(page + 1)}>
              Load More
            </Button>
          ) : (
            ""
          )}
        </Box>
      </Container>

      {/* //filter Dialog for mobile view */}
      <Dialog onClose={toggleMobileFilter} open={mobileFilter}>
        <DialogContent>
          <Filter value={filter} onFilterChange={onFilterChange} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Pictures;

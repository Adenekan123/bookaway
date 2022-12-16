import React, { useState } from "react";

import {
  Box,
  Container,
  Grid,
  TextField,
  Autocomplete,
  Button,
  Typography,
} from "@mui/material";

const defaultState = {
  domain: "AE",
  sortorder: "REVIEW",
  checkindate: "",
  checkoutdate: "",
};
const Hotelsearch = () => {
  const [searchParams, setSearchParams] = useState(defaultState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };
  return (
    <Box elevation={1} square sx={{ py: "60px", backgroundColor: "beige" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: "20px", textTransform: "capitalize" }}
          color="secondary"
          component="h2">
          Where do you want to go ?
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
          <Grid item xs={6} md={4}>
            <Autocomplete
              id="combo-box-demo"
              fullWidth
              options={["ab", "cd"]}
              sx={{ backgroundColor: "#fff" }}
              renderInput={(params) => (
                <TextField {...params} label="Location" />
              )}
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField
              type="date"
              name="checkindate"
              onChange={onChangeHandler}
              variant="outlined"
              required
              sx={{ backgroundColor: "#fff" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField
              type="date"
              name="checkoutdate"
              onChange={onChangeHandler}
              variant="outlined"
              required
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField
              type="number"
              label="No. of Rooms"
              name="noofrooms"
              onChange={onChangeHandler}
              variant="outlined"
              required
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ py: "14px" }}
              fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hotelsearch;

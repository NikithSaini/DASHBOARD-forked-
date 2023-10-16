import Dashboard from "./dashboard";
import React from "react";
import HorizontalCard from "./card";
import BarGraph from "./graph";
import RadialProgressBar from "./radialprogress";
import ProductTable from "./table";
import { Grid, Typography, Container } from "@mui/material";
import HiIcon from "@mui/icons-material/EmojiPeople";
import Searchbar from "./Searchbar.js";

export default function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid  item lg={2} md={3} sm={4} xs={12}>
          <Dashboard />
        </Grid>
        <Grid item lg={10} md={9} sm={8} xs={12}>
          <Grid container spacing={2}>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}

              container
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">
                <HiIcon /> Hello, Nikith
              </Typography>
              <Searchbar />
            </Grid>
            <Grid item  lg={12} md={12} sm={12} xs={12}>
              <HorizontalCard />
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={8} md={12} sm={12} xs={12}>
                <BarGraph />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <RadialProgressBar />
              </Grid>
            </Grid>
            <Grid container>
              <Grid tem lg={12} md={12} sm={12} xs={12}>
                <ProductTable />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

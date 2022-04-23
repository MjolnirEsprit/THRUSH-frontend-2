import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { LineChart } from "./LineChart";
import DoghnutChart from "./DoghnutChart";
import DataTable from "./DataTable";

export default function DashboardContent() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <LineChart />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <DoghnutChart />
          </Grid>

          <Grid item xs={12}>
            <DataTable />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

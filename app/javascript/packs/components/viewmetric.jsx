import React from "react";
import {Container,Typography,Divider } from "@material-ui/core";
import ViewTimelines from "./viewtimelines"
import {useStyles} from '../styles/useStyles'
import {Paper,Box } from "@material-ui/core";
import MetricsContextProvider from "../contextapi/metricscontext";
import ChangeTimelines from "../components/changetimeline";

const ViewMetrics = ()=> {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Metrics
      </Typography>
    <MetricsContextProvider>
    <Paper className={classes.metricsContainer}>
        <Box display="flex" flexDirection="column" alignItems="stretch">
          <ChangeTimelines/>
          <Divider/>
          <ViewTimelines/>
        </Box>
      </Paper>
    </MetricsContextProvider>
      
     
    </Container>
  );
}

export default ViewMetrics;

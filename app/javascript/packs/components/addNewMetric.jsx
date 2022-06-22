import React, {useContext, useEffect, useState} from "react";
import {Grid, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {MetricContext} from '../contextapi/metricscontext';
const {  DatePicker,  TimePicker  } = 'antd';
import moment from 'moment';
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
      },

      
      textField: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        width: 200,
      },

      button: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        marginBottom: theme.spacing(5)
      
      },

  }));

  const AddNewMetricTimelines = () => 
    {
        const classes = useStyles();
        
        const {addNewMetricData} = useContext(MetricContext);
        const handleAddNewMetric = (event) => {
            console.log("Handled Click");
        }

        return (


            <div className={classes.root}>
            <Grid container spacing={3}>
              
            <Grid item xs={12}>
              <TextField
                id="metricName"
                label="Metric Name"
                className={classes.textField}
                fullWidth={true}
                variant="outlined"/>

            </Grid>
        

            <Grid item xs={12}>
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                fullWidth={true}
                InputLabelProps={{
                shrink: true,
                }}
                className={classes.textField}
                variant="outlined"/>

            </Grid>
        
            <Grid item xs={12}>
            <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />

              </Grid>

              
          
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAddNewMetric}
              className={classes.button}
            >
                Save Metric
            </Button>

          </Grid>

        </Grid>
            
          </div>

          
                
                
                    
                
                        
                    
              
                    
                    
              
                    
              
                  
                

        )

    }

    export default AddNewMetricTimelines;




    /*
      
                
                <Grid item xs={6}>
                  <DatePicker picker="date" defaultValue={moment('2015/01/01', "yyyy-MM-dd")} format={"yyyy-MM-dd"} />;

              </Grid>
              <Grid item xs={6}>
                <TimePicker picker="time" defaultValue={moment(Date.now, "HH:mm")} format={"HH:mm"} />;
              </Grid>

              
    
    */
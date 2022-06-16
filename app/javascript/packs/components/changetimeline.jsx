import React, {useContext, useEffect, useState} from "react";
import {InputLabel,FormControl,Select} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {MetricContext} from '../contextapi/metricscontext'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
const ChangeTimelines = () => 
    {
        const classes = useStyles();
        const [selectValue, setSelectValue] = useState('D')
        const {changeMetricData} = useContext(MetricContext);

        const handleChange = (event) => {
                setSelectValue(event.target.value);
                console.log(`Pass Data ${event.target.value}`);
                changeMetricData(event.target.value)
          };

        return (
            <div>
                <FormControl className={classes.formControl}
                fullWidth={true}
                size='medium'
                >
                    <InputLabel htmlFor="changeTimelines">Change Timelines</InputLabel>         
                    <Select
                        native
                        value={selectValue}
                        onChange={handleChange}
                        inputProps={{
                            name: 'ChangeTimelines',
                            id: 'changeTimelines',
                        }}
                    >
                 
                    <option value={'D'}>Day</option>
                    <option value={'H'}>Hour</option>
                    <option value={'M'}>Minute</option>
                    </Select>
                </FormControl>       
              </div>
        )

    }

    export default ChangeTimelines


    // 
                
              
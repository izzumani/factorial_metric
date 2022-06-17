import React, {useContext, useEffect, useState} from "react";

import 'antd/dist/antd.css';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import {useStyles} from '../styles/useStyles'
import {MetricContext} from '../contextapi/metricscontext'

const ViewTimelines = () => 
    {
        const classes = useStyles();
        // const [timeline,setTimeline] = useState([]);
        const {timeline} = useContext(MetricContext);
        
//         useEffect (()=>{
            
//             console.log(`metricData_2: ${JSON.stringify(metricData)}`);
//             setTimeline(metricData);

// },[metricData]);

// useEffect (()=>{
    
//     if (statusMetric.isOnLoad)
//     {
//         console.log('Get Data on Load');
//         getMetricData();
//     }



// },[statusMetric.isOnLoad])

    return (
                
                        <Timeline mode="right">
                        {
                            timeline.map(({value,created_on})=>
                            (<Timeline.Item label={created_on}>{value}</Timeline.Item>))
                        }
                        </Timeline>    
                
            )
    }
    
  
  
  export default ViewTimelines;
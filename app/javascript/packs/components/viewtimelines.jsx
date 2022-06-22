import React, {useContext, useEffect, useState} from "react";

import 'antd/dist/antd.css';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import {useStyles} from '../styles/useStyles'
import {MetricContext} from '../contextapi/metricscontext'

const ViewTimelines = () => 
    {
        const classes = useStyles();
        const [timeline,setTimeline] = useState([])
        const {metricData} = useContext(MetricContext);
useEffect(()=>{
console.log(`metricData: ${metricData}`);
if (metricData !=undefined)
    setTimeline(metricData);
},[metricData])        
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
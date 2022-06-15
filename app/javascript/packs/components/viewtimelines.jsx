import React, {useContext, useEffect, useState} from "react";
import {Paper,Box } from "@material-ui/core";
import 'antd/dist/antd.css';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import {useStyles} from '../styles/useStyles'
import moment from 'moment';

const ViewTimelines = () => 
    {
        const classes = useStyles();
        const [timeline,setTimeline] = useState([]);
        useEffect (()=>{
            const tlArr = [
                {
                    "id": 2,
                    "name": "sample_1",
                    "value": 1,
                    "created_on": "2022-06-12T13:00:00.000Z",
                    "created_at": "2022-06-13T02:05:25.145Z",
                    "updated_at": "2022-06-13T02:05:25.145Z"
                },
                {
                    "id": 1,
                    "name": "label1",
                    "value": 1,
                    "created_on": "2022-06-12T14:23:00.000Z",
                    "created_at": "2022-06-12T16:32:12.042Z",
                    "updated_at": "2022-06-12T16:32:12.042Z"
                },
                {
                    "id": 3,
                    "name": "sample_2",
                    "value": 3,
                    "created_on": "2022-06-14T13:10:00.000Z",
                    "created_at": "2022-06-14T00:52:46.441Z",
                    "updated_at": "2022-06-14T00:52:46.441Z"
                }
            ];

            //const ['day','hour','minute']
let label = 'day';
const reduceObj =  tlArr.reduce((obj,elem)=>{
    let creatdOn = "";
    //console.log(JSON.stringify(obj))
    switch (label) {
        case 'day':
            creatdOn = moment(elem.created_on).format('yyyy-MM-DD'); 
            break;
        case 'hour':
            creatdOn = moment(elem.created_on).format('yyyy-MM-DDTHH'); 
        break;
        case 'minute':
            creatdOn = moment(elem.created_on).format('yyyy-MM-DDTHH:mm'); 
        break;
        
    }
    
    if (Object.keys(obj).includes(creatdOn))
    {
        // console.log(obj[creatdOn])
        let [sum,count] = obj[creatdOn]
        // console.log(`sum: ${sum} count: ${count} for ${creatdOn}`);
        sum +=elem.value;
        count +=1;
        obj[creatdOn][0]=sum;
        obj[creatdOn][1]=count;
    }else
    {
        obj[creatdOn]=new Array();

        obj[creatdOn].push(elem.value,1)
    }
    return obj;
},{});

let newArray = new Array()
 //console.log(JSON.stringify(reduceObj));
 
  Object.entries(reduceObj).forEach((elem)=>{
    let reduceGlobalObj ={}
    reduceGlobalObj["created_on"] = elem[0]
    reduceGlobalObj["value"] = parseFloat(elem[1][0]/elem[1][1]) 
    newArray.push(JSON.parse(JSON.stringify(reduceGlobalObj)));
});
 
   // console.log(JSON.stringify(newArray))
    setTimeline(newArray);

},[])

    return (
                <Paper className={classes.metricsTimelineContainer}>
                    <Box display="flex" flexDirection="column" alignItems="stretch">
                        <Timeline mode="right">
                        {
                            timeline.map(({value,created_on})=>
                            (<Timeline.Item label={created_on}>{value}</Timeline.Item>))
                        }
                        </Timeline>    
                    </Box>
            
                </Paper>
            )
    }
    
  
  
  export default ViewTimelines;
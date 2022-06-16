import React, {createContext, useState} from 'react'
import GetMetricDataApi from '../services/apiservice';
import moment from 'moment';

export const MetricContext = createContext();

const statusMetric = {
    isOnLoad:true,
    isOnChange: false
  }

const MetricsContextProvider =({children})=>{

    const [metricData, setMetricData]= useState([]);
    const [metricLabel, setMetricLabel] =useState("D");

const getMetricData = ()=>{

const reduceObj =  GetMetricDataApi.reduce((obj,elem)=>{
    let creatdOn = "";
    
    console.log(`check metricLabel ${metricLabel}`);
    switch (metricLabel) {
        case 'D':
            creatdOn = moment(elem.created_on).format('yyyy-MM-DD'); 
            break;
        case 'H':
            creatdOn = moment(elem.created_on).format('yyyy-MM-DDTHH'); 
        break;
        case 'M':
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
 
 
  Object.entries(reduceObj).forEach((elem)=>{
    let reduceGlobalObj ={}
    reduceGlobalObj["created_on"] = elem[0]
    reduceGlobalObj["value"] = parseFloat(elem[1][0])/parseFloat(elem[1][1])
    newArray.push(JSON.parse(JSON.stringify(reduceGlobalObj)));
});

console.log(`newArray: ${JSON.stringify(newArray)}`);
setMetricData(newArray)

statusMetric.isOnLoad=false;


} 

const changeMetricData = (label)=>{
    
    setMetricLabel(label);
    console.log(`changeMetricData parameter after set ${metricLabel}`);
    getMetricData();
}
// if (statusMetric.isOnLoad)
// {

//     getMetricData();
//     statusMetric.isOnLoad= false;
// }
    return (
        <MetricContext.Provider value={{metricData,getMetricData,statusMetric,changeMetricData }}>
          {children}          
        </MetricContext.Provider>
      );
}
export default MetricsContextProvider;
import React, {createContext, useReducer} from 'react'
import {GetMetricDataApi} from '../services/apiservice';
import metricsReducer, {initalState} from '../reducers/metricsReducer'
export const MetricContext = createContext(initalState);



const MetricsContextProvider =({children})=>{

    const [state,dispatch] = useReducer(metricsReducer,initalState)

const changeMetricData = (metricLabel)=>{
    
    dispatch({type:"CHANGE_TIMELINE",payload:{Label:metricLabel}});
}
if (state.isOnLoad)
{
    console.log('Loading data');
     GetMetricDataApi().then(()=>{
        dispatch({type:"LOAD",payload:{}});
     }).catch((err)=>console.log(`Err: ${err}`));
    
}
    return (
        <MetricContext.Provider value={{metricData:state.metricData,changeMetricData}}>
          {children}          
        </MetricContext.Provider>
      );
}
export default MetricsContextProvider;
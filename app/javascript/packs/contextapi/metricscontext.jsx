import React, {createContext, useReducer} from 'react'

import metricsReducer, {initalState} from '../reducers/metricsReducer'
export const MetricContext = createContext(initalState);



const MetricsContextProvider =({children})=>{

    const [state,dispatch] = useReducer(metricsReducer,initalState)

const changeMetricData = (metricLabel)=>{
    

    console.log(`changeMetricData parameter after set ${metricLabel}`);
    dispatch({type:"CHANGE_TIMELINE",payload:{Label:metricLabel}});
}
if (state.isOnLoad)
{

    dispatch({type:"LOAD",payload:{}});
}
    return (
        <MetricContext.Provider value={{timeline:state.metricData,changeMetricData}}>
          {children}          
        </MetricContext.Provider>
      );
}
export default MetricsContextProvider;
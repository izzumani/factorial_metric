import GetMetricDataApi from '../services/apiservice';
import moment from 'moment';
export const initalState ={
    metricData:[],
    metricLabel:"D",
    isOnLoad:true,
    isOnChange: false

}

const metricsReducer =(state,action)=>{
    const {type,payload} =action;

    switch (type) {
        case "LOAD":
            let _getMetricData = GetMetricDataApi;
            console.log(`_getMetricData: ${_getMetricData}`);
            let _metricLabel = "D";
            console.log(`_metricLabel: ${_metricLabel}`);

            let metricDataByTimestamp = getMetricData(_getMetricData,_metricLabel)

            return {
                ...state,
                metricData: [].concat(metricDataByTimestamp),
                isOnLoad:false
            }
            break;
    
        case "ADD_NEW":
            console.log('Adding Data')
            break;
        case "CHANGE_TIMELINE":
            let _getMetricDataChange = GetMetricDataApi;
            let _metricLabelChange = payload.Label;
            console.log(`_metricLabel: ${_metricLabelChange}`);

            let metricDataByTimestampChange = getMetricData(_getMetricDataChange,_metricLabelChange)

            return {
                ...state,
                metricData: [].concat(metricDataByTimestampChange)
            }
        break;
        default:
            return state
            
        
    }
}

const getMetricData = (_metricData,_metricLabel)=>{
    
   
   const reduceObj =  _metricData.reduce((obj,elem)=>{
       let creatdOn = "";
       
    
       switch (_metricLabel) {
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
    
           let [sum,count] = obj[creatdOn]
    
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
   
   return newArray;
   
   
   
   } 
   

export default metricsReducer;
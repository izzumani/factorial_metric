// import EventEmitter from '../events/eventemitter.js';

// export const  CachedMetricData  = [
//     {

//         "id": 2,
//         "name": "sample_1",
//         "value": 1,
//         "created_on": "2022-06-12T13:00:00.000Z",
//         "created_at": "2022-06-13T02:05:25.145Z",
//         "updated_at": "2022-06-13T02:05:25.145Z"
//     },
//     {
//         "id": 1,
//         "name": "label1",
//         "value": 1,
//         "created_on": "2022-06-12T14:23:00.000Z",
//         "created_at": "2022-06-12T16:32:12.042Z",
//         "updated_at": "2022-06-12T16:32:12.042Z"
//     },
//     {
//         "id": 4,
//         "name": "label2",
//         "value": 5,
//         "created_on": "2022-06-12T14:23:00.000Z",
//         "created_at": "2022-06-12T16:32:12.042Z",
//         "updated_at": "2022-06-12T16:32:12.042Z"
//     },
//     {
//         "id": 5,
//         "name": "label3",
//         "value": 6,
//         "created_on": "2022-06-12T14:23:00.000Z",
//         "created_at": "2022-06-12T16:32:12.042Z",
//         "updated_at": "2022-06-12T16:32:12.042Z"
//     },
//     {
//         "id": 3,
//         "name": "sample_2",
//         "value": 3,
//         "created_on": "2022-06-14T13:10:00.000Z",
//         "created_at": "2022-06-14T00:52:46.441Z",
//         "updated_at": "2022-06-14T00:52:46.441Z"
//     }
// ];

export const  CachedMetricData = [];

export function  GetMetricDataApi()
{
    return new Promise ((resolve,reject)=>{


        if (CachedMetricData.length >0)
    {
        console.log(`Get Data from Cache: ${CachedMetricData}`)
        resolve(CachedMetricData);
    }
    else 
    {
        // Get from the API
        const url = "api/v1/metrics/GetMetrics";
         fetch(url)
        .then((data)=>data.json()
        
        ).then((data)=>{
            // console.log(`data => ${JSON.stringify(data)}`);
            // Clear the cache
            CachedMetricData.length=0;
            // Add the Loaded Data from API into Cached
            // console.log(`Add to Cache => ${JSON.stringify(data)}`)
            CachedMetricData.push(...(JSON.parse(JSON.stringify(data))));

            resolve(CachedMetricData);

            // EventEmitter.emit('CACHED_DATA');

        })
        .catch((err)=> 
        {
            reject({Error:`Error: ${err}`})
            console.log(`Error: ${err}`)}
            
            )
       

       

       
    }


    });
    

}

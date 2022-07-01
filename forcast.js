// const request = require('postman-request');
import request from "postman-request";

function getWeatherLocation(location,callback){
    let url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ ' +  location + '?unitGroup=metric&key=XVUS7RZPDZ2Z6XQGUHKBAWMPW&contentType=json';
    request(url, undefined , (error,undefined,body)=> {
        if (error) {
            console.log("we have an error")
        return callback('error')
        }
       
        const objectBody = JSON.parse(body);
        callback(objectBody);
    });
}

    getWeatherLocation("london",(data)=>{
        console.log(" callback is " + data)
    })
    export {
        getWeatherLocation
    }

// getWeatherLocation('ranya',(data)=>{
//     console.log(data);
// })





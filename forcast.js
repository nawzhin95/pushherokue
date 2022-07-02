// const request = require('postman-request');
import request from "postman-request";

function getWeatherLocation(location,callback){
    let url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ ' +  location + '?unitGroup=metric&key=XVUS7RZPDZ2Z6XQGUHKBAWMPW&contentType=json';
    request(url, undefined , (error,response,body)=> {
        
         // if there is an error in connection
        if (error) {
        return callback('please make sure you have an connection of internet')
        }

    
            // if we provide wrong location it will get error 400 form server and otherwise we get 
            // 200 if everything ok

            // thars mean we have an error in passing a location for examle: !,"","jfkshfshfks"
          else if(response && response.statusCode === 400){
                return callback('an error accure in passing location! please make sure you provide a target location')
            }

        // make a body an object from string then return as a callback
        const objectBody = JSON.parse(body);
        callback(objectBody);
        });
    }

    // getWeatherLocation("sdhjfkjshdfkjhsd",(data)=>{
    //   console.log(data)
        
    // }
    // )




    export {
        getWeatherLocation
    }




// getWeatherLocation('ranya',(data)=>{
//     console.log(data);
// })





const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=dba9a60048d9100264f1a9345dbf328e&query=Dhar'

// request({url:url,json:true},(error, response)=>{
//     const data = response.body.current;
//     console.log(`${data.weather_descriptions}. It is currently ${data.temperature} degrees out. There is a ${data.precip}% chance of rain.`)
// })


// const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/pithampur.json?access_token=pk.eyJ1Ijoic3VuaWxwYW5jIiwiYSI6ImNrY204ODh0bjAwb3YycnJ1ejY4bGlleTcifQ.-t72l2uILEKfs5PEfwjiXA'

// request({url:geoCodeUrl, json:true},(error, response)=>{
//     if(error){
//         console.log('Unable to connect with the server. Please check your internet connection...');
//     }
//     else if(response.body.features.length===0)
//     {
//         console.log('We can\'t find the location');
//     }
//     else{
//     const data = response.body.features[0].center;
//     const longitute = data[0];
//     const latitute = data[1];
//     console.log(longitute,latitute);
//     }
// })

// geocode('amazon',(error,data)=>{
//     console.log('Error',error)
//     console.log('Data',data)
// })


// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(27.2038,77.5011, (error, data) => {
    console.log('Error : ', error)
    console.log('Data : ', data)
  })
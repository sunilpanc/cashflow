const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2];

if(!location)
{
  console.log('Please provide location');
}
else{
  geocode(location,(error,{latitude,longitude,location})=>{
    if(error){
      return console.log(error);
    }
    forecast(latitude,longitude, (error, forecastData) => {
      if (error){
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    })
})
}







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

const request = require('request')

const forecast = (lat,lon, callback)=>{
    const forecastUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7c4d5f4a25bff70f6f880e19f16ca3f6`;

    request({url:forecastUrl,json:true},(error,data)=>{

        if(error){
            callback('You are not connected with internet',undefined);
        }
        else if(data.body.message){
            callback('You entered invalid geocode. Please try another one...',undefined);
        }
        else{
            callback(undefined,`${data.body.weather[0].description}. It is currently ${data.body.main.temp} degrees out. There is a ${data.body.clouds['all']}% chance of rain.`);
        }
    })
}


// forecast(27.2038,77.5011,(error,data)=>{
//     console.log('Error',error)
//     console.log('Data',data)
// })

module.exports = forecast;